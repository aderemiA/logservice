class AppSuccess {
  constructor(res, data = null) {
    this.res = res;
    this.data = data;
  }

  ACCOUNTCREATED() {
    return this.res.status(201).json({
      status: true,
      message: "Account created successfully",
      error: null,
      data: null,
    });
  }

  TOKENCREATED() {
    return this.res.status(200).json({
      status: true,
      message: "Login Succesfully",
      error: null,
      data: this.data,
    });
  }

  PASSWORDFORGOT() {
    return this.res.status(200).json({
      status: true,
      message: "Reset password link sent successfully",
      error: null,
      data: this.data,
    });
  }
  PASSWORDRESET() {
    return this.res.status(201).json({
      status: true,
      message: "Password reset completed successfully",
      error: null,
      data: this.data,
    });
  }

  ACCOUNTVERIFIED() {
    return this.res.status(201).json({
      status: true,
      message: "Account verified",
      error: null,
      data: this.data,
    });
  }
  ONBOARDCOMPLETE() {
    return this.res.status(200).json({
      status: true,
      message: "On boarding Completed",
      error: null,
      data: this.data,
    });
  }

  USERINVITESUCCESSFUL() {
    return this.res.status(200).json({
      status: true,
      message: `A link has been sent to the email address provided`,
      error: null,
      data: this.data,
    });
  }

  USERRESTRICTIONSUCCESSFUL() {
    return this.res.status(200).json({
      status: true,
      message: `User has been restricted`,
      error: null,
      data: this.data,
    });
  }
    USERREACTIVATIONSUCCESSFUL() {
    return this.res.status(200).json({
      status: true,
      message: `User has been reactivated successfully`,
      error: null,
      data: this.data,
    });
  }


  FETCHEDSUCCESSFULLY() {
    return this.res.status(200).json({
      status: true,
      message: "Fetched successfully",
      error: null,
      data: this.data,
    });
  }

  CREATEDSUCCESSFULLY(type) {
    return this.res.status(200).json({
      status: true,
      message: `${type} has been created successfully`,
      error: null,
      data: this.data,
    });
  }

  UPDATEDSUCCESSFULLY(type) {
    return this.res.status(200).json({
      status: true,
      message: `${type} has been updated successfully`,
      error: null,
      data: this.data,
    });
  }
  DELETEDSUCCESSFULLY(type) {
    return this.res.status(200).json({
      status: true,
      message: `${type} has been deleted successfully`,
      error: null,
      data: this.data,
    });
  }
  PERMISSIONASSIGNED(type) {
    return this.res.status(200).json({
      status: true,
      message: `Permission has been added to role`,
      error: null,
      data: this.data,
    });
  }
}

module.exports = AppSuccess;
