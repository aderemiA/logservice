const { nrp } = require("./custigrow-core-bus/redisPubSub");
const { addNotification, addRecentActivity } = require("./events");

module.exports = () => {
  nrp.on("CUSTIGROW_USER_LOGSERVICE", async (payload) => {
    if (payload.type === "ADD_TO_NOTIFICATION") {
      await addNotification(payload);
    }

    if (payload.type === "ADD_TO_RECENT_ACTIVITY"){
      console.log('received event', payload);
      await addRecentActivity(payload);
    };
  });
};
