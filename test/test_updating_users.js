const assert = require("assert");
const User = require("../models/User");

describe("Updating a user", () => {
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

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        if (Array.isArray(users)) {
          assert(users.length === 1);
          assert(users[0].givenName === "Alex");
        } else {
          assert(users.givenName === "Alex");
        }
        done();
      });
  }

  it("instance type using set n save", (done) => {
    naz.set("givenName", "Alex");
    assertName(naz.save(), done);
  });

  it("updates a user by its model instance", (done) => {
    // naz.update({givenName:"Alex"})
    assertName(naz.updateOne({ givenName: "Alex" }), done);
  });

  it("bulk updates all users in the collection matching a given criteria", (done) => {
    assertName(
      User.update({ givenName: "Nazere" }, { givenName: "Alex" }),
      done
    );
  });

  it("update a single user given this matching criteria", (done) => {
    assertName(
      User.findOneAndUpdate({ givenName: "Nazere" }, { givenName: "Alex" }),
      done
    );
  });

  it("finds a record by id and updates the record", (done) => {
    assertName(User.findByIdAndUpdate(naz._id, { givenName: "Alex" }), done);
  });

  it("increments the number of accounts for a particular user", (done) => {
    User.update({ givenName: "Nazere" }, { $inc: { accounts: 1 } }).then(() => {
      User.findOne({ givenName: "Nazere" }).then((user) => {
        assert(user.accounts === 1);
        done();
      });
    });
  });
});
