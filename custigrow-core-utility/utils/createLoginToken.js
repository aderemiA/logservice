const {
  generateAccessToken,
  generateRefreshToken,
} = require("../security/token");
exports.createLoginToken = async (payload) => {
  const tokenData = {
    id: payload.id,
    email: payload.email,
    role: payload?.role,
    companyId: payload?.companyId,
    process: payload.process,
    fullName: payload?.fullName,
  };

  const accessToken = await generateAccessToken(tokenData);
  const refreshToken = await generateRefreshToken(tokenData);

  return {
    accessToken,
    refreshToken,
  };
};
