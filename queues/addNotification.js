const Notification = require("../models/notification");

exports.addNotification = async (data) => {
  try {
    await Notification.create({ ...data });
  } catch (error) {
    console.log(error);
  }
};
