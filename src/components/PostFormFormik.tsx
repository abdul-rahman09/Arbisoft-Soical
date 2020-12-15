import React from "react";
import { withFormik, FormikErrors } from "formik";
import { PostXT, PostFormValues, FormValues } from "./models";
import InnerForm from "components/PostForm";

const MyForm = withFormik<PostXT, PostFormValues>({
  mapPropsToValues: (props) => {
    return {
      location: props.location,
      title: props.title,
      text: props.text,
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

  handleSubmit: (values) => {},
})(InnerForm);
export default MyForm;
