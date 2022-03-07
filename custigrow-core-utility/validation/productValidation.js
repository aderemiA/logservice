const Joi = require("Joi");

const productSchema = Joi.object({
  productName: Joi.required(),
  quantity: Joi.number().required(),
  costPrice: Joi.number().required(),
  sellingPrice: Joi.number().required(),
  expiryDate: Joi.required(),
  reorderLevel: Joi.number().required(),
  barcodeNumber: Joi.string(),
  unitOfSales: Joi.string().required(),
  categoryId: Joi.string().required(),
  isOnboardingProcess: Joi.boolean().required(),
});

module.exports = {
  productSchema,
};
