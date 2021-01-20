const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientMeta = new Schema({
  ClientId: String,
  //Industry: String,
  About: String,
  Source: String,
  Parent: String,
  Fax: String,
  //Website: String,
  Street: String,
  City: String,
  State: String,
  Zip: String,
  Country: String,
  Created_At: Date,
});

mongoose.model("client-meta", ClientMeta);
