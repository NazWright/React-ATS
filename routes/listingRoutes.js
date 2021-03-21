const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Listing = mongoose.model("listings");
const ListingMeta = mongoose.model("listings-metadata");
const Submissions = mongoose.model("submissions");

module.exports = (app) => {
  app.get("/api/listings", (req, res) => {});

  app.get("/api/listings/:listingName", (req, res) => {});

  app.post("/api/listings", (req, res) => {});

  app.get("/api/listings/all", (req, res) => {});
};
