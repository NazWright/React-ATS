const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = {
  isAdmin(role) {
    if (role === "Applicant" || role === "Employer" || role === "Recruiter") {
      return false;
    }
    return true;
  },

  async hashPassword(password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  },

  async createUser(req, res) {
    const { email, password, first, last, role, parent } = req.body;
    //const hasAdminCap = this.isAdmin(role);
    const testUser = await new User({
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
    }).save();
    // try {
    //   const newUser = await User.create({
    //     googleId: null,
    //     familyName: last,
    //     givenName: first,
    //     email: email,
    //     password: this.hashPassword(password),
    //     role: role,
    //     isAdmin: hasAdminCap,
    //     parent: parent,
    //     cust_Id: null,
    //     subscription: null,
    //     accounts: hasAdminCap ? 0 : null,
    //   });
    //   console.log(newUser);
    //   res.send(newUser);
    // } catch (error) {
    //   throw error;
    // }
    res.send(testUser);
  },

  async getById(req, res) {
    const { userId } = req.params;
    const matchedUser = User.findById(userId);
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
