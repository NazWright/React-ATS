const mongoose = require('mongoose')
const {Schema} = mongoose;

const ListingSchema = new Schema({
   publisher_id: String,
   title: String,
   email: String,
   description:String,
   recruiters: [String],
   employers: [String]
});

mongoose.model('listings', ListingSchema);
