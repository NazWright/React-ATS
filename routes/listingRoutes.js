const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Listing = mongoose.model("listings");
const ListingMeta = mongoose.model("listings-metadata");

module.exports = (app) => {
  app.get(
    "/api/listings",
    requireLogin,
    // find the listings by the publisher ID.
    (req, res) => {
      Listing.find({ publisher_id: req.user.googleId }).then((listings) => {
        if (listings === undefined || listings.length === 0) {
          console.log("No Listings");
          return res.send([]);
        } else {
          // if this user has any listings
          res.send(listings);
        }
      });
    }
  );

  app.post("/api/listings", requireLogin, (req, res) => {
    const {
      title,
      description,
      compensation,
      benefits,
      jobType,
      category,
      companyName,
      website,
      city,
      state,
      zip,
      country,
    } = req.body;

    const jobListing = new Listing({
      publisher_id: req.user.googleId,
      title: title,
      email: req.user.email,
      description: description,
      recruiters: req.user.role === "Recruiter" ? req.user.googleId : [],
      employers: req.user.role === "Employer" ? req.user.googleId : [],
    }).save((err, listing) => {
      if (err) return console.error(err);
      new ListingMeta({
        user_Id: req.user.googleId,
        listingId: listing._id,
        jobinfo: {
          compensation: compensation,
          benefits: benefits,
          jobType: jobType,
          category: category,
        },
        companyinfo: {
          companyName: companyName,
          website: website,
        },
        location: {
          city: city,
          state: state,
          zipCode: zip,
          country: country,
        },
        dateCreated: Date.now(),
        status: "Active",
      }).save();
    });
    res.send(jobListing);
  });

  app.get("/api/listings/all", (req, res) => {
    const filter = {};
    Listing.find(filter).then((listings) => {
      if (listings) {
        res.send(listings);
      } else {
        res.send([]);
      }
    });
  });
};
