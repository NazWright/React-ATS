const mongoose = require("mongoose");
const { Schema } = mongoose;

const ApplicationSchema = new Schema({
  userId: String,
  applications: [
    {
      listingName: String,
      dateSubmitted: Date,
      status: String,
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
    },
  ],
});
mongoose.model("applications", ApplicationSchema);
