const assert = require("assert");
const request = require("supertest");
const app = require("../index");
const mongoose = require("mongoose");
const User = require("../models/User");

describe("Users Controller", () => {
  let testUser;
  let userId;
  const server = request(app);

  before((done) => {
    mongoose.connection.collections.users
      .drop()
      .then(() => {
        done();
      })
      .catch(() => {
        done();
      });
  });

  it("Posts to /api/listings/:id creates a new listing for the user", async () => {
    const response = await server.post("/api/users").send({
      googleId: null,
      familyName: "Wright",
      givenName: "Nazere",
      email: "nwright@gmail.com",
      password: "IamNazWright080599",
      role: "Admin",
      isAdmin: true,
      parent: "6047a57be593e5628d049390",
      cust_Id: null,
      subscription: null,
      accounts: 0,
    });
    assert(response.body !== null);
    assert(response.body.email === "nwright@gmail.com");
    assert(response.body.isAdmin === true);
    userId = response.body._id;
  });

  it("Gets to /api/users/:userId reads a user by their Id", async () => {
    const response = await server.get(`/api/users/${userId}`);
    assert(response.body._id !== undefined);
    assert(response.body.email === "nwright@gmail.com");
  });

  it("Gets to /api/users returns a list of filtered user", async () => {
    const response = await server.get("/api/users?familyName=Wright");
    assert(Array.isArray(response.body));
    assert(response.body[0]._id !== null);
    assert(response.body[0].familyName === "Wright");
  });

  it("Puts to /api/users/:userId", async () => {
    const response = await server
      .put(`/api/users/${userId}`)
      .send({ givenName: "John" });
    const user = await User.findById(userId);
    assert(response.body._id !== undefined);
    assert(user.givenName === "John");
  });

  it("Deletes to /api/users/:userId", async () => {
    const response = await server.delete(`/api/users/${userId}`);
    const user = await User.findById(userId);
    assert(user === null);
  });
});
