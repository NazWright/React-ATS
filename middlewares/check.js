check = (err, req, res, next) => {
  res.send({ error: err.message });
  next();
};
module.exports = check;
