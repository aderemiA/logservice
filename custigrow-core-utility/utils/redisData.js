const client = require("../dataConnect/redis")



exports.persistDataToRedis = async (userId, data) => {
    const user = await client.getAsync(`user-${userId}`)
    if (user) {
        client.delAsync(`user-${userId}`)
        client.set(`user-${userId}`, JSON.stringify(data))
    } else {
        client.set(`user-${userId}`, JSON.stringify(data))
    }

}


exports.getUserFromRedis = async (userId) => {
    const user = await client.getAsync(`user-${userId}`)
    return JSON.parse(user)
}