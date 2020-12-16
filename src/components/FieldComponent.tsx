import React from "react";
import { CustomField, Error } from "style/common";
import { capitalizeFirstLetter } from "utils/commonFunctions";

interface IFieldInterface {
  name: string;
  errors: string;
  touched: boolean;
}

const FieldComponent: React.FC<IFieldInterface> = ({
  name,
  touched,
  errors,
}) => {
  return (
    <div>
      <CustomField
        placeholder={`Please Enter ${capitalizeFirstLetter(name)}`}
        name={name}
      />
      {touched && errors && <Error>{errors}</Error>}
    </div>
  );
};

export default FieldComponent;
