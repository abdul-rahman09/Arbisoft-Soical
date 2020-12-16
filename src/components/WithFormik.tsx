import { withFormik, FormikErrors } from "formik";
import { MyFormProps, FormValues } from "./models";
import InnerForm from "components/LoginForm";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: "",
      password: "",
    };
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = "Please Enter Username";
    }
    if (!values.password) {
      errors.password = "Please Enter Password";
    }
    return errors;
  },

  handleSubmit: (values) => {},
})(InnerForm);
export default MyForm;
