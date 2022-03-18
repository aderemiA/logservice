const Notification = require("../models/notification");
const RecentActivity = require("../models/recentActivity");

exports.addNotification = async ({ type, ...data }) => {
  try {
    await Notification.create({ ...data });
  } catch (error) {
    console.log(error);
  }
};

exports.addRecentActivity = async ({ type, ...data}) => {
  try {
    await RecentActivity.create({...data}); 
  } catch (error) {
    console.log(error);
  }
};
