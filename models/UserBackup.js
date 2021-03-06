const mongoose = require("mongoose");
const { Schema } = mongoose;

const subscriptionSchema = new Schema({
  subscriptionName: {
    type: String,
    required: [true, "Subscription name is required."],
  },
  date_created: {
    type: Date,
    required: [true, "Date of creation must be specified."],
  },
  subscriptionStatus: {
    type: String,
    required: [true, "Subscription status must be specified."],
  },
});

const userSchema = new Schema({
  googleId: {
    type: String,
    required: false,
  },
  familyName: {
    type: String,
    required: [true, "First Name is required."],
  },
  givenName: {
    type: String,
    required: [true, "Last Name is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
  },
  password: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: [true, "Role is required."],
  },
  isAdmin: {
    type: Boolean,
    required: [true, "Admin capabilities must be specified."],
  },
  parent: {
    type: String,
    required: false,
  },
  cust_Id: {
    type: String,
    required: false,
  },
  subscription: subscriptionSchema,
  accounts: {
    type: Number,
    required: false,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
