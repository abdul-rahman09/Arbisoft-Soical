import React from "react";
import * as Yup from "yup";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import { BoardWrapper, StyledButton } from "style";

// Shape of form values
interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Handle Submit", props);
    const obj = {
      username: props.values.email,
      password: props.values.password,
    };
  };
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
  authenticate: (username: string, password: string) => void;
  // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    console.log("props", props);
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
const Basic = (props: any) => {
  console.log("props auth", props.authenticate);
  return (
    <BoardWrapper>
      <MyForm {...props} message="Login" />
    </BoardWrapper>
  );
};

export default Basic;
