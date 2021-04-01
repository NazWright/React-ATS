const mongoose = require("mongoose");
const assert = require("assert");
const request = require("supertest");
const User = require("../models/User");
const Listing = require("../models/Listings");
const app = require("../index");

describe("Listings Controller", () => {
  let employer;
  let testListing;
  let listingId; // local var for the ever changing listing id

  before(async () => {
    try {
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
    } catch (error) {
      throw error;
    }
  });

  it("Posts to /api/listings/:id creates a new listing for the user", async () => {
    const server = request(app);
    try {
      const createdListingResponse = await server
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
        });
      assert(createdListingResponse.body.publisher_id, employer._id);
      testListing = createdListingResponse.body;
    } catch (error) {
      throw error;
    }
  });

  it("Gets to /api/listing/:listingId to retrieve a listing", async () => {
    const server = request(app);
    try {
      const response = await server.get(`/api/listings/${testListing._id}`);
      assert(response.body._id, testListing._id);
    } catch (error) {
      throw error;
    }
  });

  it("Gets to /api/listings?title=name retrieves a listing or group of listings with the given name", async () => {
    const server = request(app);
    try {
      const response = await server.get("/api/listings?title=Test%20Listing");
      assert(response.body[0].title, "Test Listing");
      assert(response.body[0].jobinfo.description, "This is the description");
    } catch (error) {
      throw error;
    }
  });

  it("Puts to /api/listing/:listingId updates a particular listing by id", async () => {
    const server = request(app);
    try {
      const response = await server
        .put(`/api/listings/${testListing._id}`)
        .send({ status: "Inactive" });
      assert(response.body.status, "Inactive");
    } catch (error) {
      throw error;
    }
  });

  it("Deletes to /api/listings/:listingId deletes a specfic listing", async () => {
    try {
      const matchedListing = await Listing.findOne({
        publisher_id: employer._id,
      });
      const server = request(app);
      const response = await server.delete(
        `/api/listings/${matchedListing._id}`
      );
      // try to find the deleted listing to make sure it is not found.
      const deletedListing = await Listing.findById(matchedListing._id);
      assert(deletedListing === null);
    } catch (error) {
      throw error;
    }
  });
});
