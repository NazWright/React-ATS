const mongoose = require("mongoose");
const { Schema } = mongoose;

const ZipCodeSchema = new Schema({
  city: String,
  loc: Array,
  pop: Number,
  state: String,
});

mongoose.model("zips", ZipCodeSchema);
