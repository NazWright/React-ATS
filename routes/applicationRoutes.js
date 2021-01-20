const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const Application = mongoose.model("applications");
const User = mongoose.model("users");
const authorize = require("../middlewares/authorize");

module.exports = (app) => {
  app.post("/api/applications", requireLogin, (req, res) => {});

  app.get("/api/applications", requireLogin, (req, res) => {
    Application.find({ userId: req.user.googleId }).then((applications) => {
      if (applications) {
        res.send(applications);
      } else {
        res.send([]);
      }
    });
  });

  app.get(
    "/api/workflow/:status",
    authorize("Admin", "Employer"),
    (req, res) => {}
  );
};
