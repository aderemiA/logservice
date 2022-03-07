class AppError extends Error {
  constructor() {
    super();
  }

  NOBODYFOUND() {
    return {
      message: "No body found",
      statusCode: 404,
    };
  }

  INCOMPLETEDETAILS() {
    return {
      message:
        "Your details are Incomplete. Please ensure all details are properly filled",
      statusCode: 400,
    };
  }

  INCORRECTDETAILS() {
    return {
      message: "Incorrect password",
      statusCode: 400,
    };
  }

  USERNOTFOUND() {
    return {
      message: "User does not exist",
      statusCode: 404,
    };
  }

  EMAILALREADYEXISTS() {
    return {
      message: "Email already exists",
      statusCode: 400,
    };
  }
  USERALREADYEXISTS(type) {
    return {
      message: `A user associated with email addrress is already registered through ${type}`,
      statusCode: 400,
    };
  }

  INVALIDTOKEN() {
    return {
      message: "Invalid token",
      statusCode: 400,
    };
  }

  EXPIREDTOKEN() {
    return {
      message: "Token expired",
      statusCode: 404,
    };
  }

  USERVERIFIED() {
    return {
      message: "User already verified, pls login",
      statusCode: 400,
    };
  }

  SIGININAGAIN() {
    return {
      message: "Token expired, make another signin request",
      statusCode: 400,
    };
  }

  NOROUTEFOUND() {
    return {
      message: "No route found",
      statusCode: 404,
    };
  }

  NOTVERIFIED() {
    return {
      message: "User is not verified, check your email for verification link",
      statusCode: 400,
    };
  }

  INVALIDLOGINTOKEN() {
    return {
      message: "Invalid token, login in again",
      statusCode: 400,
    };
  }

  EXPIREDOLOGINTOKEN() {
    return {
      message: "Expired token",
      statusCode: 403,
    };
  }

  USERALREADYINVITED() {
    return {
      message: "This user has already been invited to this company",
      statusCode: 400,
    };
  }
  USERRESTRICTED() {
    return {
      message: "You have been restricted from logging in, contact your admin",
      statusCode: 403,
    };
  }
  COMPANYALREADYEXISTS() {
    return {
      message: "This company already exists",
      statusCode: 400,
    };
  }
  USERRESTRICTED() {
    return {
      message: "You have been restricted from logging in, contact your admin",
      statusCode: 403,
    };
  }
  COMPANYALREADYEXISTS() {
    return {
      message: "This company already exists",
      statusCode: 400,
    };
  }

  FORBIDDEN() {
    return {
      message: "You do not have permission to perform this action",
      statusCode: 403,
    };
  }
  INVALID_INVITE() {
    return {
      message: "Invalid invite code",
      statusCode: 400,
    };
  }
  INVITE_EXPIRED() {
    return {
      message: "Invite code has expired",
      statusCode: 400,
    };
  }
  NOROLEFOUND() {
    return {
      message: "You haven't been assigned a role, please contact your admin",
      statusCode: 400,
    };
  }

  MAX_USERS_REACHED(noOfUsers, plan) {
    return {
      message: `you can only invite ${noOfUsers} amount of users on ${plan} plan, to add more users upgrade to other plans`,
      statusCode: 400,
    };
  }
  MAX_CATEGORY_REACHED(noOfCategories, plan) {
    return {
      message: `you can only create ${noOfCategories} amount of categories on ${plan} plan, to add more categories upgrade to other plans`,
      statusCode: 400,
    };
  }
  MAX_PRODUCT_REACHED(noOfProducts, plan) {
    return {
      message: `you can only create ${noOfProducts} amount of products on ${plan} plan, to add more products upgrade to other plans`,
      statusCode: 400,
    };
  }
  CANNOT_DELETE(type) {
    return {
      message: `You can not delete this ${type} at this time, pls try again later`,
      statusCode: 400,
    };
  }
  CANNOT_DELETE_DEFAULT_ROLE() {
    return {
      message: `You cannot delete this role as it is a default role`,
      statusCode: 400,
    };
  }
}

module.exports = AppError;
