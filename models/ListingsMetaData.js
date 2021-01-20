const mongoose = require("mongoose");
const { Schema } = mongoose;

const ListingMetaData = new Schema({
  user_Id: String,
  listingId: String,
  jobinfo: {
    compensation: String,
    benefits: String,
    jobType: String,
    category: String,
  },
  companyinfo: {
    companyName: String,
    website: String,
  },
  location: {
    city: String,
    state: String,
    zipCode: String,
    country: String,
    address: String,
  },
  dateCreated: Date,
  status: String,
  featured: Boolean,
  new: Boolean,
});
mongoose.model("listings-metadata", ListingMetaData);
