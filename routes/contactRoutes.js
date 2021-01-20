const mongoose = require('mongoose');
const Contacts = mongoose.model('contacts');
//const authorize = require('../middlewares/authorize');

module.exports = app => {

    app.get('/api/contacts/', 
        authorize("Admin"),
        (req, res) =>{
            const filter = {};
            const all = await Contacts.find(filter);
        }
    )




}