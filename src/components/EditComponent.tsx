import React from "react";
import { StyledButton } from "style/common";
import { IPostInterface } from "components/models";

interface IEditInterface {
  login: any;
  item: any;
  editItem: (obj: IPostInterface) => void;
}

const EditCopmonent: React.FC<IEditInterface> = ({ item, login, editItem }) => {
  return (
    <>
      {item.userId.id == login.user.id && (
        <StyledButton
          onClick={() => {
            editItem(item);
          }}
        >
          Edit
        </StyledButton>
      )}
    </>
  );
};

export default EditCopmonent;
