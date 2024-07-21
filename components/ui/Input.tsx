"use client";

import React from "react";
import { EyeIcon, EyeOff } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  login?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [showPass, setShowPass] = React.useState(false);

  const showPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <label
        htmlFor={props.id}
        className="text-gray-500 block mt-3 mx-5 text-sm "
      >
        {props.label}
        {props.required && <sup className="text-[.9rem]">*</sup>}
      </label>
      {props.type === "password" ? (
        <div className={props.login ? `md:w-[80%] relative` : `relative`}>
          <input
            {...props}
            type={showPass ? "text" : "password"}
            className={`w-full ${
              props.login
                ? "border border-purple-600 p-2 px-3 rounded-[25px] focus:outline-none focus:bg-sky-100 transition-colors"
                : "md:w-[80%] border border-purple-600 p-2 rounded-[25px] focus:outline-none focus:bg-sky-100 transition-colors"
            } ${props.className}`}
            ref={ref}
          />
          {!showPass && (
            <EyeOff
              className="absolute right-3 top-2 text-purple-600 cursor-pointer"
              onClick={showPassword}
            />
          )}
          {showPass && (
            <EyeIcon
              className="absolute right-3 top-2 text-purple-600 cursor-pointer"
              onClick={showPassword}
            />
          )}
        </div>
      ) : (
        <input
          {...props}
          className={`w-full md:w-[100%] border border-purple-600 p-2 px-3 rounded-[25px] focus:outline-none focus:bg-sky-100 transition-colors ${props.className}`}
          ref={ref}
        />
      )}
    </>
  );
});

export default Input;
