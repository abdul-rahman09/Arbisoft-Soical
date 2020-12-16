import { withFormik, FormikErrors } from "formik";
import { ICreatePostInterface, PostFormValues } from "./models";
import InnerForm from "components/PostForm";

const MyForm = withFormik<ICreatePostInterface, PostFormValues>({
  mapPropsToValues: (props) => {
    const { location, title, text } = props.formValues;
    return {
      location,
      title,
      text,
      login: props.login,
    };
  },

  validate: (values: PostFormValues) => {
    let errors: FormikErrors<PostFormValues> = {};
    if (!values.location) {
      errors.location = "Please Enter Location";
    }
    if (!values.title) {
      errors.title = "Please Enter Title";
    }
    if (!values.text) {
      errors.text = "Please Enter Text";
    }
    return errors;
  },

  handleSubmit: (values) => {
    values.title = "";
    values.location = "";
    values.text = "";
  },
})(InnerForm);
export default MyForm;
