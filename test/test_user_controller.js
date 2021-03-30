const assert = require("assert");
const request = require("supertest");
const app = require("../index");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../models/User");

describe("Users Controller", () => {
  let testUser;
  const server = request(app);

  it("Posts to /api/listings/:id creates a new listing for the user", async () => {
    const response = await server.post("/api/users").send({
      familyName: "Wright",
      givenName: "Nazere",
      email: "nwright@gmail.com",
      role: "Admin",
      isAdmin: true,
    });
    assert(response.body !== null);
    assert(response.body.email === "nwright@gmail.com");
    assert(response.body.isAdmin === true);
  });
});
