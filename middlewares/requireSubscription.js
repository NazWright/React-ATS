module.exports = (req, res, next) => {
  // user has no subscription
  if (Object.keys(req.user.subscription).length === 0) {
    return res
      .status(401)
      .send({ error: "You do not have an active subscription" });
  }
  // user has sub
  next();
};
