const mongoose = require("mongoose");
const { Schema } = mongoose;

// this is for the dynamic forms

const FormSchema = new Schema({
  name: String,
  fields: [{}],
  formType: String,
});

mongoose.model("forms", FormSchema);
