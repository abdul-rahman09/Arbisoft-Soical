import React, { useEffect } from "react";
import { FormikProps } from "formik";
import {
  CustomForm,
  CustomField,
  Error,
  CustomTitle,
  DisabledButton,
} from "style/common";

import { StyledButton } from "style/common";
import { PostFormValues, ICreatePostInterface } from "./models";

const InnerForm = (
  props: ICreatePostInterface & FormikProps<PostFormValues>
) => {
  const { touched, errors, postData, handleSubmit, login } = props;
  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    const obj = {
      title: props.values.title,
      location: props.values.location,
      text: props.values.text,
    };
    postData(obj.text, obj.location, obj.title, login.user);
    handleSubmit();
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <CustomForm onSubmit={(e: any) => handleSubmitForm(e)}>
      <div>
        <CustomField name="title" />
        {touched.title && errors.title && <Error>{errors.title}</Error>}
      </div>
      <div>
        <CustomField name="location" />
        {touched.location && errors.location && (
          <Error>{errors.location}</Error>
        )}
      </div>
      <div>
        <CustomField name="text" />
        {touched.text && errors.text && <Error>{errors.text}</Error>}
      </div>
      <div>
        {!props.app.loading ? (
          props.values.title && props.values.text && props.values.location ? (
            <StyledButton type="submit">Share</StyledButton>
          ) : (
            <DisabledButton disabled={true}>Share</DisabledButton>
          )
        ) : (
          <DisabledButton disabled={true}>Submitting</DisabledButton>
        )}
      </div>
    </CustomForm>
  );
};
export default InnerForm;
