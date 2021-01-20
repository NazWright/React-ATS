const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  familyName: String,
  givenName: String,
  email: String,
  role: String,
  isAdmin: Boolean,
  cust_Id: String,
  subscription: {
    name: String,
    status: String,
    Date_active: Date,
  },
  accounts: Number,
});

mongoose.model("users", userSchema);
