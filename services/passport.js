const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      User.findOne({
        googleId: profile.id,
        familyName: profile.name.familyName,
        givenName: profile.name.givenName,
        email: profile.emails[0].value,
      }).then((existingUser) => {
        if (existingUser) {
          // we already have a record with the given profile ID
          done(null, existingUser);
        } else {
          // we don't have a user record with this ID, make a new record!
          new User({
            googleId: profile.id,
            familyName: profile.name.familyName,
            givenName: profile.name.givenName,
            email: profile.emails[0].value,
            role: "",
            isAdmin: null,
            cust_Id: "",
            subscription: {
              name: "",
              status: "",
              Date_active: null,
            },
            accounts: 0,
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
