const assert = require("assert");
const User = require("../models/User");

describe("deleting a user", () => {
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

  it("Removes a specific user using the model instance itself", (done) => {
    naz
      .remove()
      .then(() => User.findOne({ givenName: "Nazere" }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it("Removes a bunch of records in the collection with a given criteria", (done) => {
    User.remove({ givenName: "Nazere" })
      .then(() => User.findOne({ givenName: "Nazere" }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it("Finds a specfic user in the collection and removes them by name ", () => {
    User.findOneAndRemove({
      givenName: "Nazere",
    })
      .then(() => User.findOne({ givenName: "Nazere" }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it("Find a user in the collection and removes them by their id", (done) => {
    User.findByIdAndRemove(naz._id)
      .then(() => User.findOne({ givenName: "Nazere" }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  //   before each test create a new user joe
});
