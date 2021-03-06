const assert = require("assert");
const User = require("../models/User");

describe("Creating user records ", () => {
  it("saves user", (done) => {
    // make assertions here
    const testUser = new User({
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
    })
      .save()
      .then(() => {
        assert(!testUser.isNew); // is new is false when this record has been saved in the database.
        done();
      });
  });
});
