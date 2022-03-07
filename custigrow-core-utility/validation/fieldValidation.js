const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?.!@$%^&*-]).{6,}$/)
    .min(8)
    .max(30)
    .required()
    .label(
      "Please enter a password that is between 8 to 30, made of a number, a special symbol, a capital letter and a small letter"
    ),
  confirmpassword: Joi.ref("password"),
});

const loginSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string()
    // .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?.!@$%^&*-]).{6,}$/)
    .min(8)
    .max(30)
    .required(),
  // .label(
  //   "Please enter a password that is between 8 to 30, made of a number, a special symbol, a capital letter and a small letter"
  // ),
});
const acceptUserSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string().alphanum().required().min(8).max(30),
  fullName: Joi.string().required(),
  companyId: Joi.string().required(),
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
  acceptUserSchema,
};
