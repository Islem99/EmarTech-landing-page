import { useFormik } from "formik";

export const useForm = ({
  validationSchema,
  initialValues,
  handleSubmitAction,
}: any) => {
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues,
    ...(validationSchema && {
      validationSchema,
      validateOnBlur: false,
      validateOnChange: true,
      validateOnMount: true,
    }),
    // By disabling validation onChange and onBlur formik will validate on submit.
    onSubmit: async (values, action) => {
      handleSubmitAction(values);
    },
  });
  return {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    isValid,
    touched,
    values,
  };
};
