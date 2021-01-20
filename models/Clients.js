const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientSchema = new Schema({
  clientName: String,
  contactNumber: String,
  AccountManager: String,
  Created_By: String,
});

mongoose.model("clients", ClientSchema);
