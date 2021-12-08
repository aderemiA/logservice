const express = require('express');


const router = express.Router();

const { getNotifications } = require('../controller/notification')

const { verifyToken } = require('../custigrow-core-utility/middleware')



router.post("/get", verifyToken, getNotifications);

module.exports = router;