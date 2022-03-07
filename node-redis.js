const { nrp } = require("./custigrow-core-bus/redisPubSub");
const { addNotification } = require("./events");

module.exports = () => {
  nrp.on("CUSTIGROW_USER_LOGSERVICE", async (payload) => {
    if (payload.type === "ADD_TO_NOTIFICATION") {
      await addNotification(payload);
    }
  });
};
