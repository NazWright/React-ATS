const assert = require("assert");
const request = require("supertest");
const app = require("../index");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = mongoose.model("users");

describe("Users Controller", () => {
  let testUser;
  const server = request(app);

  it(" POSTS to /api/users creates a new user", async () => {
    request(app).post("/api/users").send({
      email: "nazwrightthedeveloper@gmail.com",
      password: "HelloIamNazWright",
      first: "Nazzy",
      last: "Wright",
      role: "Applicant",
      parent: "6053a6dceab211d3ed6fe26c",
    });
  });

  // it("GETS to /api/users/:userId", () => {
  //   // testUser = User.findOne({ email: "nazwrightthedeveloper@gmail.com" })
  //   //   .then((user) => {
  //   //     console.log(user);
  //   //     done();
  //   //   })
  //   //   .catch((err) => {
  //   //     done(err);
  //   //   });
  //   // const response = await server.get(`/api/users/${testUser._id}`);
  //   // assert(response.body._id, testUser._id);
  //   // assert(response.body.email, "nazwrightthedeveloper@gmail.com");
  // });

  // it("GETS to /api/users?criteriaName=criteriaValue", async () => {
  //   // const response = await server.get(
  //   //   "/api/users?email=nazwrightthedeveloper@gmail.com"
  //   // );
  //   // assert(response.body[0].email, "nazwrightthedeveloper@gmail.com");
  //   // assert(response.body[0]._id, testUser._id);
  // });

  // it("PUTS to /api/users/:userId updates a particular user", async () => {
  //   // const hashedCredetial = await bcrypt.hash("TestUpdatePassword123424", 10);
  //   // const response = await server.put(`/api/users/${testUser._id}`).send({
  //   //   password: hashedCredetial,
  //   // });
  //   // assert(response.body._id, testUser._id);
  //   // assert(response.body.password, hashedCredetial);
  // });

  // it("Deletes to /api/users/:userId deletes a specific user", async () => {
  //   // const response = await server.delete(`/api/users/${testUser._id}`);
  //   // const matchedUser = await User.findById(response.body._id);
  //   // assert(matchedUser, null);
  // });
});
