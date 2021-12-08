const crypto = require("crypto");

exports.encryptToken = () => {
  const resetToken = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken, "utf8")
    .digest("hex");
  const expirationDate = Date.now() + 30 * 60 * 1000;

  return { resetToken, hashedToken, expirationDate };
};

exports.decryptToken = (token) => {
  return crypto.createHash("sha256").update(token, "utf8").digest("hex");
};
