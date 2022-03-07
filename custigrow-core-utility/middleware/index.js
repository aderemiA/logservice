const { verifyAccessToken } = require("../security/token");
const AppError = require("../response/responseMessage");
const axios = require("axios");
const client = require("../dataConnect/redis");
const { SERVER_CONFIG } = require("../serverInit");

exports.verifyToken = async (req, res, next) => {
  try {
    const authorization = req.get("Authorization");
    if (!authorization) throw new AppError().INVALIDLOGINTOKEN();

    const token = authorization.split(" ")[1];
    if (!token) throw new AppError().INVALIDLOGINTOKEN();

    const decoded = await verifyAccessToken(token);
    if (
      decoded &&
      decoded.name !== "JsonWebTokenError" &&
      decoded.name !== "TokenExpiredError"
    ) {
      req.user = {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role,
        companyId: decoded.companyId
      };

      next();
    } else if (decoded.name === "TokenExpiredError")
      throw new AppError().EXPIREDOLOGINTOKEN();
    else if (decoded.name === "JsonWebTokenError")
      throw new AppError().INVALIDTOKEN();
    else throw new AppError().EXPIREDTOKEN();
  } catch (error) {
    next(error);
  }
};

exports.validatePermission = (action) => async (req, res, next) => {
  const { companyId } = req.params;
  try {
    if (!req.user.role) throw new AppError().FORBIDDEN();
    if (req.user.role === "Super Admin") next();

    var permissions;
    permissions = await client.getAsync("perms");

    var roles;
    roles = await client.getAsync(`companyId-${companyId}`);

    if (!permissions) {
      const { data: permissionData } = await axios.get(
        `${SERVER_CONFIG.orgService}/api/orgservice/middleware/get/permission`
      );
      permissions = permissionData.data;

      await client.setAsync("perms", JSON.stringify(permissionData.data));
    } else {
      permissions = JSON.parse(permissions);
    }

    if (!roles) {
      const { data: profile } = await axios.get(
        `${SERVER_CONFIG.orgService}/api/orgservice/middleware/get/roles/${companyId}`
      );

      roles = profile.data;
      await client.setAsync(
        `companyId-${companyId}`,
        JSON.stringify(profile.data)
      );
    } else {
      roles = JSON.parse(roles);
    }

    const { _id } = permissions.find((item) => item.name === action);
    const role = roles.find((item) => item.name === req.user.role);
    if (role.permissionId.includes(_id)) next();
    else throw new AppError().FORBIDDEN();
  } catch (error) {
    next(error);
  }
};
