const assert = require("assert");
const User = require("../models/User");

describe("Reading users from the database", () => {
  let naz;

  beforeEach((done) => {
    naz = new User({
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
    naz.save().then(() => {
      done();
    });
  });

  it("finds all users with a name of nazere", (done) => {
    User.find({
      givenName: "Nazere",
    }).then((users) => {
      assert(users[0]._id.toString() === naz._id.toString());
      done();
    });
  });

  it("finds a user with a particular id", (done) => {
    User.findOne({
      _id: naz._id,
    }).then((user) => {
      assert(user.givenName === "Nazere");
      done();
    });
  });
});
