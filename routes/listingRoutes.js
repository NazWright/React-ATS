const ListingsController = require("../controllers/listingsController");

module.exports = (app) => {
  app.get("/api/listings", (req, res) => {});

  app.post("/api/listings/:userId", ListingsController.create);

  app.get("/api/listings/:listingName", (req, res) => {});

  app.post("/api/listings", (req, res) => {});

  app.get("/api/listings/all", (req, res) => {});
};
