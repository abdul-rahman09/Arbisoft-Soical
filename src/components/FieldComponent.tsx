import { Field } from "formik";
import React from "react";
import { CustomField, Error } from "style/common";

interface IFieldInterface {
  name: string;
  errors: any;
  touched: any;
}

const FieldComponent: React.FC<IFieldInterface> = ({
  name,
  touched,
  errors,
}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div>
      <CustomField
        placeholder={`Please Enter ${capitalizeFirstLetter(name)}`}
        name={name}
      />
      {touched[name] && errors[name] && <Error>{errors[name]}</Error>}
    </div>
  );
};

export default FieldComponent;
