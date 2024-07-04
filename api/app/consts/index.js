const ERRORS = {
  DEFAULT: "internal server error",
  PARAMS_ERROR: "Invalid params",
  UNAUTHORIZED: "UnAuthorized to Perfrom this action",
  INVALID_CREDIENTIALS: "Invalid email and password combination.",
  EMAIL_EXISTS: "Email already exists",

  USER_REGISTERED: "User registered Successfully",
  USER_REMOVED: "User deleted Successfully",
  USER_ID_ERROR: "Invalid user id",
  USER_EXISTS: "User with this email is already exists",
  FORBIDDEN: "Unknown user",
  PASSSWORD_ERROR: "Invalid password",
};

module.exports = Object.freeze(ERRORS);
