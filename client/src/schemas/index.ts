import * as Yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your firstName"),
  lastName: Yup.string().min(2).max(25).required("Please enter your lastName"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(6, "Password must be atleast 6 characters long")
    .required("Please enter valid password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), ""], "Password must match"),
  agreementCheckbox: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
  role: Yup.string().required(),
});

export const resetPasswordSchema = Yup.object({
  newPassword: Yup.string()
    .min(6, "Password must be atleast 6 characters long")
    .required("Please enter valid password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("newPassword"), ""], "Password must match"),
});

export const loginFormSchema = Yup.object({
  email: Yup.string().required("Please enter valid email"),
  password: Yup.string().required("Please enter password"),
});

export const forgotPasswordFormSchema = Yup.object({
  forgetPassword: Yup.string().required("Please enter a valid email or phone number"),
});
