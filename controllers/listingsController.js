const mongoose = require("mongoose");
const Listing = mongoose.model("listings");

module.exports = {
  async create(req, res) {
    const { title, location, jobinfo } = req.body;
    const { userId } = req.params;

    const job = await Listing.create({
      publisher_id: userId,
      title: title,
      location: location,
      jobinfo: jobinfo,
      dateCreated: Date.now(),
      status: "Active",
      new: true,
    });

    res.send(job);
  },
};
