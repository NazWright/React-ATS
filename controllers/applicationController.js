const mongoose = require("mongoose");
const Application = mongoose.model("applications");

module.exports = {
  async submitApplication(req, res) {
    const { listingId, userId } = req.params;
    const { values } = req.body;
    try {
      const NewAssociateApplication = await new Application({
        listingId,
        userId,
        date_created: Date.now(),
        values,
        status: "New",
      }).save();
      res.send(NewAssociateApplication);
    } catch (error) {
      throw error;
    }
  },
};
