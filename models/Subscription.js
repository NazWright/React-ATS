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

const subscription = mongoose.model("subscriptions", subscriptionSchema);
module.exports = subscription;
