const Notification = require("../models/notification");

exports.addNotification = async ({ type, ...data }) => {
  console.log(data);
  try {
    await Notification.create({ ...data });
  } catch (error) {
    console.log(error);
  }
};
