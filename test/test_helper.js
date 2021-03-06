//  intial setup tests
const mongoose = require("mongoose");
const keys = require("../config/keys");

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect(keys.mongoURI);
  mongoose.connection
    .once("open", () => {
      done();
    }) // once mongoose emits 'open' event
    .on("error", (error) => {
      // once mongoose emits an 'error'
      console.warn("Warning", error);
    });
});

// run this before starting tests.
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
