const mongoose = require("mongoose");
const { Schema } = mongoose;

// this is for the dynamic forms in the future

const SubmissionSchema = new Schema({
  form: String,
  listing: String,
  userId: String,
  values: {},
  status: String,
});

mongoose.model("submissions", SubmissionSchema);
