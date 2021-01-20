const mongoose = require('mongoose')
const {Schema} = mongoose;

const ApplicationSchema = {
    userId: String,
    applications: [{
        listingName: String,
        dateSubmitted: Date,
        status: String
    }]
}
mongoose.model('applications', ApplicationSchema);

