import React, { useEffect } from "react";
import { FormikProps } from "formik";
import Field from "./FieldComponent";
import { CustomForm, Error, CustomTitle, DisabledButton } from "style/common";

import { StyledButton } from "style/common";
import { FormValues, MyFormProps } from "./models";

const InnerForm = (props: MyFormProps & FormikProps<FormValues>) => {
  const { touched, errors, authenticate } = props;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const obj = {
      username: props.values.email,
      password: props.values.password,
    };
    authenticate(props.values.email, props.values.password);
  };

  useEffect(() => {
    if (props.app.success == true) {
      props.history.push("/posts");
    }
  }, [props.app]);
  return (
    <CustomForm onSubmit={(e: any) => handleSubmit(e)}>
      <CustomTitle>Login</CustomTitle>
      {props.app.error && <Error>Invalid Username or Password</Error>}
      <Field name="email" touched={touched} errors={errors} />
      <Field name="password" touched={touched} errors={errors} />
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
