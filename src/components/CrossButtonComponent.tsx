import React from "react";
import { CrossButtonWrapper } from "style/post";

interface IFieldInterface {
  closePressed: (evt: React.MouseEvent) => void;
}

const FieldComponent: React.FC<IFieldInterface> = ({ closePressed }) => {
  return (
    <CrossButtonWrapper onClick={(evt: React.MouseEvent) => closePressed(evt)}>
      X
    </CrossButtonWrapper>
  );
};

export default FieldComponent;
