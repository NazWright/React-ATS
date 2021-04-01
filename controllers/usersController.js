const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../models/User");

module.exports = {
  // isAdmin(role) {
  //   if (role === "Applicant" || role === "Employer" || role === "Recruiter") {
  //     return false;
  //   }
  //   return true;
  // },

  // async hashPassword(password) {
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   return hashedPassword;
  // },

  async createUser(req, res) {
    const {
      googleId,
      familyName,
      givenName,
      email,
      password,
      role,
      isAdmin,
      parent,
      cust_Id,
      subscription,
      accounts,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      googleId,
      familyName,
      givenName,
      email,
      password: hashedPassword,
      role,
      isAdmin,
      parent,
      cust_Id,
      subscription,
      accounts,
    });
    const UserDoc = await user.save();
    res.send(UserDoc);
  },

  async getById(req, res) {
    const { userId } = req.params;
    const matchedUser = await User.findById(userId);
    res.send(matchedUser);
  },

  async getMatchedUsers(req, res) {
    const filter = { ...req.query };
    const matchedUsers = await User.find(filter);
    res.send(matchedUsers);
  },

  async updateOneUser(req, res) {
    const updateDetails = { ...req.body };
    const { userId } = req.params;
    const updatedUser = await User.findByIdAndUpdate(userId, updateDetails);
    res.send(updatedUser);
  },

  async deleteUserById(req, res) {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndDelete(userId);
    res.send(deletedUser);
  },
};
