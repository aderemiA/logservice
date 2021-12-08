const Notification = require("../models/notification");

exports.getAllNotifications = (companyId) => {
  return Notification.find({ companyId: companyId })
    .sort({ createdAt: -1 })
    .then((notifications) => {
      return notifications;
    })
    .catch((err) => {
      console.log(err);
    });
};
