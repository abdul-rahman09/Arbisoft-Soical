import * as Yup from "yup";

export const LoginValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Must be atleast 3 characters or more")
    .max(10, "Must be 10 characters or less")
    .required("Required"),
  password: Yup.string()
    .max(10, "Must be 10 characters or less")
    .required("Required"),
});
export const PostValidationSchema = Yup.object({
  location: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  text: Yup.string().required("Required"),
});
