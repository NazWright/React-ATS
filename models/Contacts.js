const mongoose = require('mongoose');
const {Schema} = mongoose;

const Contacts = new Schema({
    user_Id: String,
    contacts: [
        {contactId:String, contactEmail:String, contactPhone:String}
    ]
})
mongoose.model('contacts', Contacts);