const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());

app.use(check);

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
module.exports = app;

// host name
// https://cryptic-plateau-14392.herokuapp.com/
// git repo deployment target
// https://git.heroku.com/cryptic-plateau-14392.git
