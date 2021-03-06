const Listing = mongoose.model("listings");

index = (req, res, next) => {
  const { lng, lat } = req.query;
  Listing.geoNear(
    { type: "Point", coordinates: [lng, lat] },
    { spherical: true, maxDistance: 200000 }
  );
};

module.exports = index;
