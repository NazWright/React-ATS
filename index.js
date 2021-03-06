const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
const flash = require("req-flash");
const cors = require("cors");
require("./models");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/applicationRoutes")(app);
require("./routes/listingRoutes")(app);
require("./routes/visitorRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/locationRoutes")(app);
require("./routes/clientRoutes")(app);
require("./routes/formRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // making sure express will serve up production assets
  app.use(express.static("frontend/build"));

  // express will serve up index.html
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// host name
// https://cryptic-plateau-14392.herokuapp.com/
// git repo deployment target
// https://git.heroku.com/cryptic-plateau-14392.git
