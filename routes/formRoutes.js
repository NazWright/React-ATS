const mongoose = require("mongoose");
const Forms = mongoose.model("forms");
const Submissions = mongoose.model("submissions");

module.exports = (app) => {
  app.get("/api/forms/:formName", async (req, res) => {
    const formName = req.params.formName;
    const forms = await Forms.findOne({
      name: formName,
    });
    const fields = forms.fields;
    res.send(fields);
  });

  app.post("/api/forms", async (req, res) => {
    const { name, fields } = req.body;
    const form = new Forms({
      name: name,
      fields: fields,
    }).save();
    res.send(form);
  });

  app.post("/api/submissions/:formName", (req, res) => {
    const formName = req.params.formName;
    const { first, last, email, phone, listingId } = req.body;
    const values = {
      first,
      last,
      email,
      phone,
    };
    const forms = Forms.findOne({ name: formName }).then((form) => {
      const submission = new Submissions({
        form: form._id,
        listing: listingId,
        userId: req.user.googleId,
        values: values,
        status: "new",
      }).save((err, sub) => {
        if (err) return console.log(err);
        res.send(sub);
      });
    });
  });
};
