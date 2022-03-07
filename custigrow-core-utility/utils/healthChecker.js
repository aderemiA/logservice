const mongoose = require("mongoose");
const redis = require("redis");

exports.healthCheck = async () => {
    const state = await mongoose.connection.readyState;

    let stateResult;

    switch (state) {
        case 1: stateResult = "server connected"; break;
        case 2: stateResult = "server connecting"; break;
        case 3: stateResult = "server disconnecting"; break;
        default: stateResult = "server disconnected"; break;

    }


    const client = redis.createClient({
        host: process.env.REDIS_URL,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD
    });


    const redisRes = await client.pingAsync()


    return {
        "MongoDb_Status": stateResult,
        "Redis_Status": redisRes === "PONG" ? true : false
    }

}