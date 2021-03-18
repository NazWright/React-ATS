const mongoose = require("mongoose");
const { Schema } = mongoose;

// location of a current user.
const pointSchema = new Schema({
  type: {
    type: String,
    default: "Point",
  },
  coordinates: { type: [Number], index: "2dsphere" },
});

const ListingSchema = new Schema({
  publisher_id: String,
  title: String,
  geometry: pointSchema,
  jobinfo: {
    compensation: String,
    benefits: String,
    jobType: String,
    category: String,
    description: String,
  },
  dateCreated: Date,
  status: String,
  featured: Boolean,
  new: Boolean,
});

mongoose.model("listings", ListingSchema);
