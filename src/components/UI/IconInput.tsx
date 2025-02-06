import React from "react";
import { Input } from "./input";

interface IconInputProps {
  icon: React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  required: boolean;
  value: string;
  placeholder: string;
}

const IconInput = (props: IconInputProps) => {
  return (
    <div className="relative w-full">
      <span className="absolute left-2 top-1/2 -translate-y-1/2">
        {props.icon}
      </span>
      <Input
        value={props.value}
        placeholder={props.placeholder}
        required={props.required}
        type={props.type}
        onChange={props.onChange}
        className="w-full pl-10"
      />
    </div>
  );
};

export default IconInput;
