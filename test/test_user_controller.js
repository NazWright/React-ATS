const assert = require("assert");
const request = require("supertest");
const app = require("../index");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = mongoose.model("users");

describe("Users Controller", () => {
  let testUser;
  let hashedPassword;

  it(" POSTS to /api/users creates a new user", async () => {
    const password = "IamNazereWright080599";
    hashedPassword = await bcrypt.hash(password, 10);
    const count = await User.countDocuments();
    request(app)
      .post("/api/users")
      .send({
        email: "nazwrightthedeveloper@gmail.com",
        password: hashedPassword,
        first: "Nazzy",
        last: "Wright",
        role: "Applicant",
        parent: "6053a6dceab211d3ed6fe26c",
      })
      .end(async () => {
        const newCount = await User.countDocuments();
        assert(count + 1 === newCount);
      });
  });

  it("GETS to /api/users/:userId", async () => {
    testUser = await User.findOne({ email: "nazwrightthedeveloper@gmail.com" });
    const server = request(app);
    const response = await server.get(`/api/users/${testUser._id}`);
    assert(response.body._id, testUser._id);
  });
});
