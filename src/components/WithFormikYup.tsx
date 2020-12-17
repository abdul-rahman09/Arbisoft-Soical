import React, { useEffect } from "react";
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
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Must be atleast 3 characters or more")
        .max(15, "Must be 10 characters or less")
        .required("Required"),
      password: Yup.string()
        .max(20, "Must be 10 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      props.authenticate(values.username, values.password);
    },
  });
  useEffect(() => {
    if (props.app.success == true) {
      props.history.push("/posts");
    }
  }, [props.app]);
  return (
    <LoginWrapper>
      <CustomTitle>Login</CustomTitle>
      {props.app.error && <Error>Invalid Username or Password</Error>}

      <CustomForm onSubmit={formik.handleSubmit}>
        <Field
          name="username"
          value={formik.values.username}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.username || false}
          errors={formik.errors.username || ""}
        />
        <Field
          name="password"
          value={formik.values.password}
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.password || false}
          errors={formik.errors.password || ""}
        />
        <div>
          {!props.app.loading ? (
            formik.values.username && formik.values.password ? (
              <StyledButton type="submit">Login</StyledButton>
            ) : (
              <DisabledButton disabled={true}>Login</DisabledButton>
            )
          ) : (
            <DisabledButton disabled={true}>Submitting</DisabledButton>
          )}
        </div>
      </CustomForm>
    </LoginWrapper>
  );
};
export default SignupForm;
