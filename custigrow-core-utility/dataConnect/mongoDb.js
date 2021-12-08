const mongoose = require("mongoose");
const logger = require("../logger/logEngine");

const db = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  logger.error("Mongo Db Failed on Connect: ERROR", err);
});

mongoose.connection.on("open", (connected) => {
  logger.info("Mongo Db Connection Successful", connected);
});

const session = mongoose.connection.startSession();

module.exports = {
  db,
  session,
};
