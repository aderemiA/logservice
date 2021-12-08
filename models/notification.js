const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notificationSchema = new Schema(
  {
    activity: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    companyId: {
      type: String,
      required: true,
    },
    isNew: {
      type: Boolean,
      default: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timeStamps: true }
);

const Notification = mongoose.model("notification", notificationSchema);

module.exports = Notification;
