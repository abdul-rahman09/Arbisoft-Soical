import React, { useEffect } from "react";
import { FormikProps } from "formik";
import { CustomForm, DisabledButton } from "style/common";
import Field from "./FieldComponent";
import { StyledButton } from "style/common";
import { PostFormValues, ICreatePostInterface } from "./models";

const InnerForm = (
  props: ICreatePostInterface & FormikProps<PostFormValues>
) => {
  const { touched, errors, postData, handleSubmit, login } = props;
  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    const { title, location, text } = props.values;
    postData(text, location, title, login.user);
    handleSubmit();
  };

  useEffect(() => {
    return () => {};
  }, []);

  const { loading } = props.app;
  const { text, title, location } = props.values;

  return (
    <CustomForm onSubmit={(e: any) => handleSubmitForm(e)}>
      <Field
        touched={touched.title || false}
        errors={errors.title || ""}
        name="title"
      />
      <Field
        touched={touched.location || false}
        errors={errors.location || ""}
        name="location"
      />
      <Field
        touched={touched.text || false}
        errors={errors.text || ""}
        name="text"
      />
      <div>
        {!loading ? (
          title && text && location ? (
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
