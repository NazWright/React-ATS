const mongoose = require("mongoose");
const Zips = mongoose.model("zips");
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.get("/api/zipcodes", requireLogin, (req, res) => {
    Zips.find({}).then((zips) => {
      zips === undefined || zips.length === 0
        ? res.send({ error: "No Zip Codes" })
        : res.send(zips);
    });
  });
};
