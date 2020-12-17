import styled from "styled-components";
import { Field } from "formik";

export const FieldWrapper = styled.p`
  color: grey;
  margin: 0px;
  background-color: white;
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
export const CustomField = styled.input`
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
  height: 350px;
  justify-content: space-evenly;
`;
