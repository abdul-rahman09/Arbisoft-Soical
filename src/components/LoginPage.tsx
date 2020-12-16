import React from "react";
import { LoginWrapper } from "style/login";
import MyForm from "components/WithFormik";

const LoginPage = (props: any) => {
  return (
    <LoginWrapper>
      <MyForm {...props} />
    </LoginWrapper>
  );
};

export default LoginPage;
