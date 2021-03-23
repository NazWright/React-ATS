const ListingsController = require("../controllers/listingsController");

module.exports = (app) => {
  app.get("/api/listings/:listingId", ListingsController.getById);

  app.post("/api/listings/:userId", ListingsController.create);

  app.get("/api/listings/:listingName", (req, res) => {});

  app.post("/api/listings", (req, res) => {});

  app.get("/api/listings/all", (req, res) => {});

  app.delete("/api/listings/:listingId", ListingsController.deleteById);

  app.delete("/api/listings", ListingsController.deleteMany);

  app.get("/api/listings", ListingsController.filterListingsByName);

  app.put("/api/listings/:listingId", ListingsController.updateOne);

  //app.put("/api/listings/:listingId", ListingsController.updateOne);
};
