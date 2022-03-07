const Notification = require("../models/notification");

exports.getAllNotifications = async ({ id, companyId }) => {
  const notifications = await Notification.find({
    $or: [
      {
        userId: id,
      },
      { companyId },
    ],
  }).sort({ createdAt: -1 });
  return notifications;
};
