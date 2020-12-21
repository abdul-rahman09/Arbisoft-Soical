import styled from "styled-components";
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
