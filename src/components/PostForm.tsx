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
import { PostFormValues, PostXT } from "./models";

const InnerForm = (props: PostXT & FormikProps<PostFormValues>) => {
  const { touched, errors, postData } = props;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const obj = {
      title: props.values.title,
      location: props.values.location,
      text: props.values.text,
    };
    postData(obj.text, obj.location, obj.text);
  };

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    // if (props.app.success == true) {
    //   props.history.push("/posts");
    // }
  }, [props.app]);
  return (
    <CustomForm onSubmit={(e: any) => handleSubmit(e)}>
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
