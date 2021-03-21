const mongoose = require("mongoose");
const { deleteMany } = require("../models/Subscription");
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

  async deleteOne(req, res) {
    const { listingId } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(listingId);
    res.send(deletedListing);
  },

  async deleteMany(req, res) {
    const { userId } = req.query;
    const deletedListings = await Listing.remove({
      publisher_id: { $in: [userId] },
    });
    console.log(deletedListings, "a");
    res.send(deletedListings);
  },
};
