const mongoose = require("mongoose");
const User = mongoose.model("users");
const Listing = mongoose.model("listings");

describe("Listings Controller", () => {
  let jobEmployer;

  //   it("POSTS to /api/listings creates a new job listing", async () => {
  //     jobEmployer = await new User({
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
  //       accounts: 1,
  //     })
  //       .save()
  //       .catch((err) => {
  //         console.warn(err);
  //       });

  //     assert( )
  //   });
});
