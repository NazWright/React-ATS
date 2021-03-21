const mongoose = require("mongoose");
const User = mongoose.model("users");
const Listing = mongoose.model("listings");
const assert = require("assert");
const request = require("supertest");
const app = require("../index");

describe("Listings Controller", () => {
  let jobEmployer;

  it("POSTS to /api/listings/:userId creates a new job listing", async () => {
    jobEmployer = await new User({
      googleId: "114983407291327089129",
      familyName: "Wright",
      givenName: "Nazere",
      email: "nxwright@aggies.ncat.edu",
      password: null,
      role: "Admin",
      isAdmin: true,
      parent: null,
      cust_Id: "cus_IlbKdIZxTyrSKW",
      subscription: null,
      accounts: 1,
    })
      .save()
      .catch((err) => {
        console.warn(err);
      });

    const listingCount = await Listing.countDocuments();

    // make get request to the listings and send the id of the user to the request
    request(app)
      .post(`/api/listings/${jobEmployer._id}`)
      .send({
        title: `Test Listing from ${
          jobEmployer.givenName + " " + jobEmployer.familyName
        }`,
        location: null,
        jobinfo: {
          compensation: "15/hr",
          benefits: "none",
          jobType: "Full-Time",
          category: "Default",
          description: "This is a test listing as an example.",
        },
      })
      .end(async () => {
        const newListingCount = await Listing.countDocuments();
        assert(listingCount + 1 === newListingCount);
      });
  });
});
