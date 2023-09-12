const mongoose = require("mongoose");

// database name --> paultrydb
function connect() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect("mongodb+srv://jayathrimr:8iLwIkgw9vVA5q0i@egg-hatching.ofmofr9.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
      .then((res, err) => {
        if (err) return reject(err);
        resolve();
        console.log("connected to the MongoDB database");
      });
  });
}

function close() {
  return new Promise((resolve, reject) => {
    mongoose.connection
      .close()
      .then(console.log("Close connection with database"));
  });
}
module.exports = { connect, close };

// mongodb://localhost:27017