const NRP =  require('node-redis-pubsub');

require("dotenv").config();

const { REDIS_PORT, REDIS_URL, REDIS_PASSWORD } = process.env;

const config = {
    scope: "custigrow",
    host: REDIS_URL,
    password: REDIS_PASSWORD,
    PORT: REDIS_PORT
}

exports.nrp = new NRP(config);
