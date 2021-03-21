const mongoose = require("mongoose");
const Listing = mongoose.model("listings");

module.exports = {
  async create(req, res) {
    const { title, location, jobinfo } = req.body;
  },
};
