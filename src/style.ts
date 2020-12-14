import styled from "styled-components";
import { Button } from "react-bootstrap";
import { withFormik, FormikProps, FormikErrors, Field } from "formik";

export const MyH1 = styled.h1`
  color: red;
`;
export const PostWrapper = styled.div`
  background-color: white;
  margin: 20px;
  padding: 10px;
  border: 1px solid lightblue;
  border-radius: 8px;
`;

export const Title = styled.p`
  color: lightblue;
  background-color: white;
  margin: 0px;
`;
export const FieldWrapper = styled.p`
  color: grey;
  margin: 0px;
  background-color: white;
`;
export const CommentsWrapper = styled.div`
  color: gray;
  cursor: pointer;
  max-height: 100px;
  overflow: auto;
  background-color: white;
`;
export const CommentsDiv = styled.div`
  color: gray;
  text-align: left;
  padding: 10px;
  background-color: white;
  border: 1px solid lightgray;
`;
export const CardWrapper = styled.div`
  background-color: papayawhip;
  margin: 2px;
  padding: 10px;
`;
export const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 8px;
  outline: none;
  box-shadow: none;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
  &:active {
    background-color: blue;
    border: none;
  }
  &:focus {
    outline: none;
    background-color: blue;
    box-shadow: none;
  }
`;
export const StyledButtonRight = styled(StyledButton)`
  float: right;
`;
export const DisabledButton = styled(StyledButton)`
  background-color: lightblue;
  cursor: not-allowed;
  &:hover {
    background-color: lightblue;
  }
  &:active {
    background-color: lightblue;
  }
  &:focus {
    background-color: lightblue;
  }
`;
export const InputWrapper = styled.textarea`
  width: 100%;
  height: 60px;
  margin: 10px 0px;
  padding: 10px;
  outline: none;
  color: gray;
  resize: none;
  border: none;
  &:hover {
    border: none;
  }
`;
export const InputComment = styled(InputWrapper)`
  height: 20px;
  padding: 0px;
`;
export const CrossButtonWrapper = styled.span`
  cursor: pointer;
`;
export const BoardWrapper = styled.div`
  text-align: center;
`;
export const LoginWrapper = styled(BoardWrapper)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("login.jpg");
`;
export const CustomTitle = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  color: white;
  font-size: 1.8em;
`;
export const Error = styled.p`
  color: black;
  margin-top: 5px;
  font-size: 12px;
`;
export const CustomField = styled(Field)`
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  background-color: #fff;
`;
export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 250px;
  justify-content: space-evenly;
`;
