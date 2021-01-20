const passport = require("passport");
const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const Application = mongoose.model("applications");
// const authorize = require('../middlewares/authorize');
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51I3QyMEah8AfDWDxYhy3ELRbNQsXDw7GgYqrabNqjUbheDO7DFBxqdxf9NKYlkoglN9AjcvCkjZLeB44Ld5KiKGU00TFMdWEX9"
);
module.exports = (app) => {
  const ROLES = {
    Admin: "Admin",
    Employer: "Employer",
    Recruiter: "Recruiter",
    Applicant: "Applicant",
  };

  app.get(
    "/auth/google/applicant",
    (req, res, next) => {
      next();
    },
    passport.authenticate("google", {
      scope: ["profile", "email"],
      state: ROLES.Applicant,
    })
  );

  app.get(
    "/auth/google/employer",
    (req, res, next) => {
      next();
    },
    passport.authenticate("google", {
      scope: ["profile", "email"],
      state: ROLES.Employer,
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      // need to
      // check if the user role exists
      //if so then

      // if the user already has a role
      if (req.user.role && req.user.role != "") {
        // existing user is trying to access different role
        if (req.user.role != req.query.state) {
          res.status(403);
          res.redirect("/");
        } else {
          res.redirect("/dashboard");
        }
      } else {
        req.user.role = req.query.state;
        if (req.user.role === "Applicant") {
          req.user.isAdmin = false;
          req.user.applications = new Application({
            userId: req.user.googleId,
            applications: [],
          }).save();
        } else {
          req.user.isAdmin = true;
          const customer = stripe.customers
            .create({
              name: req.user.givenName,
              email: req.user.email,
            })
            .then((res) => {
              req.user.cust_Id = res.id;
              req.user.save();
            });
          res.redirect("/pricing");
        }
        const user = req.user.save();
        res.redirect("/dashboard");
      }
    }
  );

  app.get("/api/current_user", (req, res) => {
    console.log(req.user);
    res.send(req.user);
  });

  app.post("/api/current_user", requireLogin, (req, res) => {
    console.log(req.body);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // come back to change this employer to all admins
  app.get("/api/create_user", requireLogin, (req, res) => {});
};
