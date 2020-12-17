import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Field from "./FieldComponent";
import { LoginWrapper } from "style/login";
import {
  StyledButton,
  DisabledButton,
  CustomForm,
  CustomTitle,
  Error,
} from "style/common";

const SignupForm = (props: any) => {
  const formik = useFormik({
    initialValues: {
      location: props.formValues.location || "",
      title: props.formValues.title || "",
      text: props.formValues.text || "",
      login: props.login,
    },
    validationSchema: Yup.object({
      location: Yup.string().required("Required"),
      title: Yup.string().required("Required"),
      text: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const { title, location, text } = values;
      props.postData(text, location, title, props.login.user);
      resetForm();
    },
  });
  const { title, text, location } = formik.values;
  return (
    <>
      {props.app.error && <Error>Invalid Username or Password</Error>}

      <CustomForm onSubmit={formik.handleSubmit}>
        <Field
          name="title"
          value={title}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.title}
          errors={formik.errors.title}
        />
        <Field
          name="location"
          value={location}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.location}
          errors={formik.errors.location}
        />
        <Field
          name="text"
          value={text}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.text}
          errors={formik.errors.text}
        />
        <div>
          {!props.app.loading ? (
            location && title && text ? (
              <StyledButton type="submit">Share</StyledButton>
            ) : (
              <DisabledButton disabled={true}>Share</DisabledButton>
            )
          ) : (
            <DisabledButton disabled={true}>Submitting</DisabledButton>
          )}
        </div>
      </CustomForm>
    </>
  );
};
export default SignupForm;
