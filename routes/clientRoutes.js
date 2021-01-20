const authorize = require("../middlewares/authorize");
const mongoose = require("mongoose");
const Clients = mongoose.model("clients");
const ClientMeta = mongoose.model("client-meta");
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/clients", authorize("Employer", "Admin"), (req, res) => {
    const {
      name,
      phone,
      manager,
      about,
      fax,
      source,
      street,
      city,
      state,
      zip,
      client,
      country,
    } = req.body;

    const newClient = new Clients({
      clientName: name,
      contactNumber: phone,
      AccountManager: manager,
      Created_By: req.user.googleId,
    }).save((err, newclient) => {
      if (err) return console.log(err);
      new ClientMeta({
        ClientId: newclient._id,
        About: about,
        Source: source,
        Parent: client,
        Fax: fax,
        Street: street,
        City: city,
        State: state,
        Zip: zip,
        Country: country,
        Created_At: Date.now(),
      }).save();
    });
    res.send(newClient);
  });

  app.get(
    "/api/clients",
    requireLogin,
    // find the listings by the publisher ID.
    (req, res) => {
      Clients.find({ Created_By: req.user.googleId }).then((clients) => {
        if (clients === undefined || clients.length === 0) {
          console.log("No Clients");
          return res.send([]);
        } else {
          // if this user has any listings
          res.send(clients);
        }
      });
    }
  );
};
