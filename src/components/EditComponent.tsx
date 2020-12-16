import React from "react";
import { StyledButton } from "style/common";
import { IPostInterface } from "components/models";

interface IEditInterface {
  login: any;
  post: any;
  editPost: (obj: IPostInterface) => void;
}

const EditCopmonent: React.FC<IEditInterface> = ({ post, login, editPost }) => {
  return (
    <>
      {post.userId.id == login.user.id && (
        <StyledButton
          onClick={() => {
            editPost(post);
          }}
        >
          Edit
        </StyledButton>
      )}
    </>
  );
};

export default EditCopmonent;
