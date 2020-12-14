import React, { useEffect } from "react";
import { FormikProps } from "formik";
import {
  CustomForm,
  CustomField,
  Error,
  CustomTitle,
  DisabledButton,
} from "style";

import { StyledButton } from "style";
import { FormValues, MyFormProps } from "./models";

const InnerForm = (props: MyFormProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, authenticate } = props;
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
    if (props.app.success == true) {
      props.history.push("/posts");
    }
  }, [props.app]);
  return (
    <CustomForm onSubmit={(e: any) => handleSubmit(e)}>
      <CustomTitle>Login</CustomTitle>
      {props.app.error && <Error>Invalid Username or Password</Error>}

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
        {!props.app.loading ? (
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
export default InnerForm;
