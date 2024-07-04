import { serviceCalls } from "./serviceCalls";

export const signInService = (payload: any, cb: any) => {
  try {
    serviceCalls.post("/auth/signin", payload, (err: any, response: any) => {
      if (err) {
        cb(err);
      } else {
        cb(null, response);
      }
    });
  } catch (err) {
    console.log(
      "🚀 ~ file: userServiceCalls.js:15 ~ signInService ~ err:",
      err
    );
  }
};

export const signupService = (payload: any, cb: any) => {
  try {
    serviceCalls.post("/auth/signup", payload, (err: any, response: any) => {
      if (err) {
        cb(err);
      } else {
        cb(null, response);
      }
    });
  } catch (err) {
    console.log(
      "🚀 ~ file: userServiceCalls.js:15 ~ signupService ~ err:",
      err
    );
  }
};

export const forgotPasswordService = (payload: any, cb: any) => {
  try {
    serviceCalls.post(
      "/auth/forgotPassword",
      payload,
      (err: any, response: any) => {
        if (err) {
          cb(err);
        } else {
          cb(null, response);
        }
      }
    );
  } catch (err) {
    console.log(
      "🚀 ~ file: userServiceCalls.js:15 ~ forgotPasswordService ~ err:",
      err
    );
  }
};

export const resetPassword = (payload: any, cb: any) => {
  try {
    serviceCalls.post(
      "/auth/resetPassword",
      payload,
      (err: any, response: any) => {
        if (err) {
          cb(err);
        } else {
          cb(null, response);
        }
      }
    );
  } catch (err) {
    console.log(
      "🚀 ~ file: userServiceCalls.js:15 ~ resetPassword ~ err:",
      err
    );
  }
};
