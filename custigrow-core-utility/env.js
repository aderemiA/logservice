require("dotenv").config();
const { HOST, ENV, PORT, CUSTIGROW_FRONT_END_URL, ORGSERVICE } = process.env;

const SERVER_CONFIG = {
  ssl: true,
  port: PORT,
  hostname: HOST,
  frontEndUrl: CUSTIGROW_FRONT_END_URL,
  env: ENV,
  orgService: ORGSERVICE,
};

module.exports = SERVER_CONFIG;
