import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function FormInput({ label, name, type, defaultValue, placeholder }) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default FormInput;
