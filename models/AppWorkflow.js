const mongoose = require('mongoose');
const {Schema} = mongoose;

const AppWorkflow = new Schema({
    listing_Id:String,
    application_Name: String,
    applicants: [
        {
            applicant_Id:String,
            status:String
        }
    ]
});

mongoose.model('application-workflow', AppWorkflow);