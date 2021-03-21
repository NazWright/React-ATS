const mongoose = require("mongoose");
const User = mongoose.model("users");
const Listing = mongoose.model("listings");
const assert = require("assert");
const request = require("supertest");
const app = require("../index");

describe("Listings Controller", () => {
  let employer;

  beforeEach(async () => {
    await mongoose.connection.collections.listings.drop();
  });

  before(async () => {
    employer = await User.create({
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
      accounts: 0,
    });
  });

  it("Posts to /api/listings/:id creates a new listing for the user", async () => {
    request(app)
      .post(`/api/listings/${employer._id}`)
      .send({
        title: "Test Listing",
        location: null,
        jobinfo: {
          compensation: "15/hr",
          benefits: "none",
          jobType: "Full-Time",
          category: "Default",
          description: "This is the description",
        },
      })
      .end(async () => {
        const matchedListing = await Listing.findOne({
          publisher_id: employer._id,
        });
        assert(matchedListing !== null);
      });
  });

  // it("Deletes to /api/listings/:listingId deletes a specfic listing", async () => {
  //   const listing = await Listing.findById("6057c4e5190d4302052470b7");
  //   request(app).delete(`/api/listings/${listing._id}`).end(async () => {
  //     const deletedListing = await Listing.findById("6057c4e5190d4302052470b7");
  //     assert( deletedListing === null );
  //   })
  // });

  // it("Deletes to /api/listings/:userId deletes all listings from a given user", () => {

  // });
});
