const mongoose = require("mongoose");
const { Schema } = mongoose;

const ListingMetaData = new Schema({
  user_Id: String,
  listingId: String,
  companyinfo: {
    companyName: String,
    website: String,
  },
  recruiters: [String],
  employers: [String],
});
mongoose.model("listings-metadata", ListingMetaData);
