const mongoose = require("mongoose");
const { deleteMany, updateOne } = require("../models/Subscription");
const Listing = mongoose.model("listings");

module.exports = {
  // create a listing
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
  // delete a particular listing by its id
  async deleteById(req, res) {
    const { listingId } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(listingId);
    res.send(deletedListing);
  },
  // delete all of the listings created by this user
  async deleteMany(req, res) {
    const { userId } = req.query;
    const deletedListings = await Listing.remove({
      publisher_id: { $in: [userId] },
    });
    res.send(deletedListings);
  },
  // retrieve one particular listing by its id
  async getById(req, res) {
    const { listingId } = req.params;
    const matchedListing = await Listing.findById(listingId);
    res.send(matchedListing);
  },

  async filterListingsByName(req, res) {
    const { name } = req.query;
    const matchedListings = await Listing.find({ title: name });
    res.send(matchedListings);
  },

  async updateOne(req, res) {
    const updateDetails = { ...req.body };
    const { listingId } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(
      listingId,
      updateDetails
    );
    res.send(updatedListing);
  },
};
