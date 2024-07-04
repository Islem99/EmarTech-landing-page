import { FC, useCallback, useMemo, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { FieldTitle, InputField, Select } from "../../components/inputs";
import { ButtonVariants, InputFieldVariants, UserRoles } from "../../components/constants";
import MuiPhoneNumber from "material-ui-phone-number-2";
import { signUpSchema } from "../../schemas";
import { signupService } from "../../services/userServiceCalls";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthenticationWrapper } from "./index";

const initialValues = {
  agreementCheckbox: false,
  confirmPassword: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  phoneNumber: "",
  role: "",
};

type PhoneNumber =
  | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | string;

const DropdownOptions = [
  UserRoles.PROJECT_EXECUTOR,
  UserRoles.SUPPLIER,
  UserRoles.USER,
] 

export const Signup: FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitAction = useCallback(
    (values: any) => {
      setIsSubmitting(true);
      const { confirmPassword, role, ...rest } = values;
      signupService({ role: role.toUpperCase(), ...rest }, (err: any, response: any) => {
        setIsSubmitting(false);
        if (err) console.log("-----------err-------", err);
        if (response) navigate("/login");
      });
    },
    [navigate]
  );

  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    touched,
    values,
  } = useForm({
    initialValues,
    validationSchema: signUpSchema,
    handleSubmitAction,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const onChangePhoneNumber = useCallback(
    (value: PhoneNumber) => {
      const event = {
        target: {
          name: "phoneNumber",
          value,
        },
      };
      handleChange(event);
    },
    [handleChange]
  );

  const {
    confirmPasswordError,
    emailError,
    firstNameError,
    lastNameError,
    paswordError,
  } = useMemo(
    () => ({
      firstNameError:
        errors.firstName && touched.firstName ? errors.firstName : "",
      lastNameError: errors.lastName && touched.lastName ? errors.lastName : "",
      emailError: errors.email && touched.email ? errors.email : "",
      paswordError: errors.password && touched.password ? errors.password : "",
      confirmPasswordError:
        errors.confirmPassword && touched.confirmPassword
          ? errors.confirmPassword
          : "",
    }),
    [
      errors.confirmPassword,
      errors.email,
      errors.firstName,
      errors.lastName,
      errors.password,
      touched.confirmPassword,
      touched.email,
      touched.firstName,
      touched.lastName,
      touched.password,
    ]
  );

  return (
    <AuthenticationWrapper>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Typography className="auth-heading">Signup</Typography>
        <Box className="flex-center justify-between sm-flex-col">
          <Box className="form-container flex-center mr-10">
            <InputField
              error={!!firstNameError}
              errorTooltip={firstNameError as string}
              isRequired={true}
              label="First Name"
              labelClassName="input-label"
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
            />
            <InputField
              error={!!paswordError}
              errorTooltip={paswordError as string}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              isRequired={true}
              label="Password"
              labelClassName="input-label"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              value={values.password}
            />
            <InputField
              error={!!emailError}
              errorTooltip={emailError as string}
              isRequired={true}
              label="Email"
              labelClassName="input-label"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
          </Box>
          <Box className="form-container flex-center ml-10">
            <InputField
              error={!!lastNameError}
              errorTooltip={lastNameError as string}
              isRequired={true}
              label="Last Name"
              labelClassName="input-label"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
            />
            <InputField
              error={!!confirmPasswordError}
              errorTooltip={confirmPasswordError as string}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setConfirmPassword((prev) => !prev)}
                    >
                      {confirmPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              isRequired={true}
              label="Confirm Password"
              labelClassName="input-label"
              name="confirmPassword"
              onBlur={handleBlur}
              onChange={handleChange}
              type={confirmPassword ? "text" : "password"}
              value={values.confirmPassword}
            />
            <FieldTitle
              isRequired={true}
              label="Phone Number"
              className="input-label"
            />
            <MuiPhoneNumber
              countryCodeEditable={false}
              defaultCountry={"sa"}
              disableAreaCodes={true}
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={onChangePhoneNumber}
              variant="outlined"
            />
          </Box>
        </Box>
        <Box className="input-label">
          <Select
            value={values.role}
            name="role"
            label="Are you a?"
            labelClassName="input-label"
            isRequired={false} 
            onChange={handleChange} 
            options={DropdownOptions}
            variant={InputFieldVariants.OUTLINED}       
          />
        </Box>
        <Box className="flex-center justify-start input-label">
          <Typography className="input-label" gutterBottom variant="body1">
            <Checkbox
              checked={values.agreementCheckbox}
              name="agreementCheckbox"
              onChange={handleChange}
              size="small"
            />
            I accept the
            <Link className="link sign-up">Terms and Conditions</Link>
            and
            <Link className="link sign-up">Privacy Policy.</Link>
          </Typography>
        </Box>
        <Button
          className="auth-btn input-label"
          disabled={!isValid || isSubmitting}
          type="submit"
          variant={ButtonVariants.OUTLINED}
        >
          Signup
        </Button>
      </form>
    </AuthenticationWrapper>
  );
};
