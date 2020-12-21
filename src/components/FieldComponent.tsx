import React from "react";
import { CustomField, Error } from "style/common";
import { capitalizeFirstLetter } from "utils/commonFunctions";

interface IFieldInterface {
  name: string;
  errors: any;
  touched: any;
  type: string;
  value: string;
  onBlur: (e: any) => void;
  onChange: (e: any) => void;
}

const FieldComponent: React.FC<IFieldInterface> = ({
  name,
  type,
  onChange,
  onBlur,
  touched,
  value,
  errors,
}) => {
  return (
    <div>
      <CustomField
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {touched && errors ? (
        <div>
          {capitalizeFirstLetter(name)} {errors}
        </div>
      ) : null}
    </div>
  );
};

export default FieldComponent;
