const assert = require("assert");
const Listing = require("../models/Listings");
const User = require("../models/User");
const request = require("supertest");
const app = require("../index");

// describe("Creating a listing", (done) => {
//   let testUser;

//   beforeEach((done) => {
//     testUser = new User({
//       googleId: "114983407291327089129",
//       familyName: "Wright",
//       givenName: "Nazere",
//       email: "nxwright@aggies.ncat.edu",
//       password: null,
//       role: "Admin",
//       isAdmin: true,
//       parent: null,
//       cust_Id: "cus_IlbKdIZxTyrSKW",
//       subscription: null,
//       accounts: 0,
//     })
//       .save()
//       .then(() => {
//         done();
//       });
//   });

//   it("Creates a new listing given the specified user", () => {
//     const testListing = new Listing({
//       publisher_id: testUser._id,
//       title: "Test Listing",
//       geometry: pointSchema,
//       jobinfo: {
//         compensation: "15",
//         benefits: "None",
//         jobType: "Full Time",
//         category: "MANUFACTURING",
//         description:
//           "This is a test description of a test listing created by a test.",
//       },
//       dateCreated: Date.now(),
//       status: "Active",
//       featured: true,
//       new: true,
//     })
//       .save()
//       .then(() => {
//         assert(!testListing.isNew);
//       });
//   });

// it("handles test to GET /api/listings", () => {
//   request(app)
//     .get("/api/listings")
//     .end((err, response) => {
//       console.log(response);
//     });
// });
//});
