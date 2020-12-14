import React, { useEffect } from "react";
import * as Yup from "yup";
import { withFormik, FormikProps, FormikErrors } from "formik";
import styled from "styled-components";
import { Formik } from "formik";
import {
  CustomForm,
  CustomField,
  Error,
  CustomTitle,
  DisabledButton,
} from "style";

import { LoginWrapper, StyledButton } from "style";
import { IUserInterface } from "./models";

// Shape of form values
interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
  login: {
    loading: boolean;
    success: boolean;
    error: boolean;
    user: IUserInterface;
  };
  history: any;
  authenticate: (email: string, password: string) => void;
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message, authenticate } = props;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const obj = {
      username: props.values.email,
      password: props.values.password,
    };
    authenticate(props.values.email, props.values.password);
  };

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    if (props.login.success == true) {
      props.history.push("/posts");
    }
  }, [props.login]);
  return (
    <CustomForm onSubmit={(e: any) => handleSubmit(e)}>
      <CustomTitle>{message}</CustomTitle>
      {props.login.error && <Error>Invalid Username or Password</Error>}

      <div>
        <CustomField name="email" />
        {touched.email && errors.email && <Error>{errors.email}</Error>}
      </div>
      <div>
        <CustomField type="password" name="password" />
        {touched.password && errors.password && (
          <Error>{errors.password}</Error>
        )}
      </div>
      <div>
        {!props.login.loading ? (
          props.values.email && props.values.password ? (
            <StyledButton type="submit">Login</StyledButton>
          ) : (
            <DisabledButton disabled={true}>Login</DisabledButton>
          )
        ) : (
          <DisabledButton disabled={true}>Submitting</DisabledButton>
        )}
      </div>
    </CustomForm>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialEmail?: string;
  message: string;
  login: {
    loading: boolean;
    success: boolean;
    error: boolean;
    user: IUserInterface;
  };
  history: any;
  authenticate: (username: string, password: string) => void;
  // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: "",
    };
  },

  // Add a custom validation function (this can be async too!)
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

  handleSubmit: (values) => {
    // do submitting things
  },
})(InnerForm);

// Use <MyForm /> wherevs
const LoginPage = (props: any) => {
  return (
    <LoginWrapper>
      <MyForm {...props} message="Login" />
    </LoginWrapper>
  );
};

export default LoginPage;
