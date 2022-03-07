const { AppSuccess } = require("../custigrow-core-utility/serverInit");
const { getAllNotifications } = require("../services/notification");

const getNotifications = async (req, res, next) => {
  try {
    const notifications = await getAllNotifications(req.user);
    return new AppSuccess(res, notifications).FETCHEDSUCCESSFULLY();
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getNotifications,
};
