require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cron = require("node-cron");
const mongoSanitize = require("express-mongo-sanitize");
const {
  SERVER_CONFIG,
  AppError,
} = require("./custigrow-core-utility/serverInit");
const logger = require("./custigrow-core-utility/logger/logEngine");
const { db } = require("./custigrow-core-utility/dataConnect/mongoDb");
const { receiveMessage } = require("./custigrow-core-bus");
const redisEvent = require("./node-redis");
const notificationRoutes = require("./route/notification");

const { promoMetrics } = require("./custigrow-core-utility/utils/promoMetrics");
const { healthCheck } = require("./custigrow-core-utility/utils/healthChecker");

const app = express();
// Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use(mongoSanitize());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

app.get("/", (req, res) => {
  return res.send("Welcome to Custigrow User Authentication Service");
});

app.get("/health-check", async (req, res) => {
  const livenessResult = await healthCheck();
  return res.json({ livenessResult });
});

app.get("/metric", async (req, res) => {
  const metricsResult = await promoMetrics();
  return res.json({ metricsResult });
});

app.get("/", (req, res) => {
  return res.send("Welcome to Custigrow Notification Service Service");
});

app.use("/api/logs/notification", notificationRoutes);

app.use((req, res, next) => {
  throw new AppError().NOROUTEFOUND();
});

app.use((error, req, res, next) => {
  if (!error.statusCode) {
    logger.error(
      `Request failed with statusCode: 500, message: ${error.message} at path: ${req.originalUrl}`
    );
    return res.status(500).json({
      message: "Error processing request",
      status: false,
      data: null,
    });
  }

  logger.error(
    `Request failed with statusCode: ${error.statusCode}, message: ${error.message} at path: ${req.originalUrl}`
  );

  return res.status(error.statusCode).json({
    message: error.message,
    status: false,
    data: null,
  });
});

module.exports = app;
