import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Field from "./FieldComponent";
import { LoginWrapper } from "style/login";
import {
  PostFormValues,
  IUserInterface,
  IApptypeInterface,
} from "components/models";
import { StyledButton, DisabledButton, CustomForm, Error } from "style/common";
import { PostValidationSchema } from "validation";

interface IPostFormInterface {
  formValues: PostFormValues;
  app: IApptypeInterface;
  login: {
    user: IUserInterface;
  };
  postData: (
    text: string,
    loc: string,
    title: string,
    user: IUserInterface
  ) => void;
}

const PostForm: React.FC<IPostFormInterface> = ({
  app,
  formValues,
  login,
  postData,
}) => {
  const formik = useFormik({
    initialValues: {
      location: formValues.location || "",
      title: formValues.title || "",
      text: formValues.text || "",
      login: login,
    },
    validationSchema: PostValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const { title, location, text } = values;
      postData(text, location, title, login.user);
      resetForm();
    },
  });
  const { title, text, location } = formik.values;
  return (
    <>
      {app.error && <Error>Invalid Username or Password</Error>}

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
          {!app.loading ? (
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
export default PostForm;
