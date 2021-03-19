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
};
