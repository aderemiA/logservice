require("dotenv").config();
const { ENV, PORT, CUSTIGROW_FRONT_END_URL, ORGSERVICE } = process.env;

const SERVER_CONFIG = {
  ssl: true,
  port: PORT,
  frontEndUrl: CUSTIGROW_FRONT_END_URL,
  env: ENV,
  orgService: ORGSERVICE,
};

module.exports = SERVER_CONFIG;
