const mongoose = require("mongoose");
const User = mongoose.model("users");
const Listing = mongoose.model("listings");
const assert = require("assert");
const request = require("supertest");
const app = require("../index");

describe("Listings Controller", () => {
  let employer;
  let testListing;
  let listingId; // local var for the ever changing listing id

  before(async () => {
    await mongoose.connection.collections.listings.drop();
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

        // record exists
        assert(matchedListing !== null);
        listingId = matchedListing._id;
      });
  });

  it("Gets to /api/listing/:listingId to retrieve a listing", () => {
    request(app)
      .get(`/api/listings/${listingId}`)
      .end((response) => {
        console.log(response);
      });
  });

  it("Gets to /api/listings?name=name retrieves a listing or group of listings with the given name", () => {});

  it("Puts to /api/listing/:listingId updates a particular listing by id", () => {});

  it("Deletes to /api/listings/:listingId deletes a specfic listing", async () => {
    const matchedListing = await Listing.findOne({
      publisher_id: employer._id,
    });
    request(app)
      .delete(`/api/listings/${matchedListing._id}`)
      .end(async () => {
        // try to find the deleted listing to make sure it is not found.
        const deletedListing = await Listing.findById(matchedListing._id);
        assert(deletedListing === null);
      });
  });

  it("Deletes to /api/listings/:userId deletes all listings from a given user", () => {
    request(app)
      .delete(`/api/listings/${employer._id}`)
      .end(async () => {
        const deletedListings = await Listing.find({
          publisher_id: employer._id,
        });
        assert(deletedListings === null);
      });
  });
});
