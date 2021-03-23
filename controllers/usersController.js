const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = {
  async create(req, res) {
    const { email, password, first, last, role, parent } = req.body;
    // user password hash generate 10 times for security
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      // create a user
      const newUser = await new User({
        googleId: null,
        familyName: last,
        givenName: first,
        email: email,
        password: hashedPassword,
        role: role,
        isAdmin: parent === null ? true : false,
        parent: parent,
        cust_Id: null,
        subscription: null,
        accounts: 0,
      }).save();
    } catch {
      // back to the homepage
      res.redirect("/");
    }
  },

  async getById(req, res) {
    const { userId } = req.params;
    const matchedUser = User.findById(userId);
    res.send(matchedUser);
  },

  //get user by id
  // get a list of users that match the given criteria
  // update a user by a list of criteria and id
  // delete a user
};
