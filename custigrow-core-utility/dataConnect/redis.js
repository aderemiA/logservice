const redis = require("redis");
const logger = require("../logger/logEngine");
const { promisifyAll } = require("bluebird");

promisifyAll(redis);

const client = redis.createClient({
    host: process.env.REDIS_URL, 
    port: process.env.REDIS_PORT, 
    password: process.env.REDIS_PASSWORD
});

client.on("connect", () => {
    logger.info("Redis Connected Successfully");
})

client.on("error", (err) => {
    logger.error("Redis Failed on Connect", err);
});

module.exports = client;
