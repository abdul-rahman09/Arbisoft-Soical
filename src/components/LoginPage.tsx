import React, { useEffect } from "react";
import * as Yup from "yup";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import { BoardWrapper, StyledButton } from "style";
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
    console.log("LOGIN CHANGED", props.login);
    if (props.login.success == true) {
      console.log("props success");
      props.history.push("/posts");
    }
  }, [props.login]);
  return (
    <Form onSubmit={(e: any) => handleSubmit(e)}>
      <h1>{message}</h1>

      <div>
        <Field name="email" />
        {touched.email && errors.email && <div>{errors.email}</div>}
      </div>
      <div>
        <Field type="password" name="password" />
        {touched.password && errors.password && <div>{errors.password}</div>}
      </div>
      <div>
        <StyledButton type="submit" disabled={isSubmitting}>
          Login
        </StyledButton>
      </div>
    </Form>
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
      errors.email = "Username Required";
    } else if (!values.email) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
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
    <BoardWrapper>
      <MyForm {...props} message="Login" />
    </BoardWrapper>
  );
};

export default LoginPage;
