const { createLogger, format, transports } = require("winston");

const { env } = process;
const httpTransportOptions = {
  host: "http-intake.logs.datadoghq.com",
  path:
    "/v1/input/" +
    env.DD_API_KEY +
    "?ddsource=nodejs" +
    "&service=" + env.APP_NAME +
    "&ddenv=" + env.ENV,
    ssl: true,
};

const logger = createLogger({
  exitOnError: false,
  format: format.json(),
  transports: [new transports.Http(httpTransportOptions)],
  handleExceptions: true
});

module.exports = logger;
