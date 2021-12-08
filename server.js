require("dotenv").config();
const app = require("./app");
const debug = require("debug")("custigrow-company-profile:server");
const { db } = require("./custigrow-core-utility/dataConnect/mongoDb");
const logger = require("./custigrow-core-utility/logger/logEngine");
const { SERVER_CONFIG } = require("./custigrow-core-utility/serverInit");
const job = require("./jobs/index");

const port = normalizePort(SERVER_CONFIG.port);
app.set("port", port);

db;

app.listen(SERVER_CONFIG.port, () => {
  job.start();
  console.log("LIstening");
  logger.info(`Server listening on ${SERVER_CONFIG.hostname}`);
});
app.on("error", onError);
app.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      logger.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      logger.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}