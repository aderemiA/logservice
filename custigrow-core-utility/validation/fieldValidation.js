const Joi = require("joi");

const registerSchema = Joi.object({
  fullname: Joi.string(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string().alphanum().required().min(8).max(30),
  confirmpassword: Joi.ref("password"),
});

const loginSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string().alphanum().required().min(8).max(30),
});

const forgotpasswordSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }),
});

const resetpasswordSchema = Joi.object({
  password: Joi.string().alphanum().required().min(8).max(30),
  confirmpassword: Joi.ref("password"),
  resettoken: Joi.string(),
  email: Joi.string().email({ minDomainSegments: 2 }),
});

module.exports = {
  registerSchema,
  loginSchema,
  forgotpasswordSchema,
  resetpasswordSchema,
};
