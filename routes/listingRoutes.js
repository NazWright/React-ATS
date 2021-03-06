const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Listing = mongoose.model("listings");
const ListingMeta = mongoose.model("listings-metadata");
const Submissions = mongoose.model("submissions");

module.exports = (app) => {
  app.get("/api/listings", requireLogin, async (req, res) => {
    const listings = await Listing.find({ publisher_id: req.user.googleId });
    res.send(listings);
  });

  app.get("/api/listings/:listingName", (req, res) => {
    const listingName = req.params.listingName;
    Listing.findOne({
      title: listingName,
    }).then((listing) => {
      if (listing) {
        res.send(listing);
      }
    });
  });

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
      listingId,
    } = req.body;
    console.log("This is the id i was looking fo", listingId);
    const jobListing = new Listing({
      publisher_id: req.user.googleId,
      title: title,
      location: {
        city: city,
        state: state,
        zipCode: zip,
        country: country,
      },
      jobinfo: {
        compensation: compensation,
        benefits: benefits,
        jobType: jobType,
        category: category,
        description: description,
      },
      dateCreated: Date.now(),
      status: "Active",
      new: true, // add condition to change
    }).save((err, listing) => {
      if (err) return console.error(err);
      new ListingMeta({
        user_Id: req.user.googleId,
        listingId: listing._id,
        companyinfo: {
          companyName: companyName,
          website: website,
        },
        recruiters: req.user.role === "Recruiter" ? req.user.googleId : [],
        employers: req.user.role === "Employer" ? req.user.googleId : [],
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

  app.get("/api/list", async (req, res) => {
    const listings = await ListingMeta.find({
      user_Id: req.user.googleId,
    }).then((listings) => {
      return listings.map((listing) => {
        return listing._id;
      });
    });

    const submissions = await Submissions.find({
      listing: { $in: listings },
    });

    res.send(submissions);
  });
};
/* Submissions.find({ listing: { $in: listings } }, (err, result) => {
      console.log(result);
    });
    */

// Submissions.find({ listing: listing._id }).then((submission) => {
// console.log(submission);
//});
