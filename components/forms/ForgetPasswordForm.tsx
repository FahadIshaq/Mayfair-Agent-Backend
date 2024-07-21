"use client";

import { useState } from "react";
import { forgotPasswordApi } from "@/api/auth/authApi";
import toast from "react-hot-toast";

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async (e: any) => {
    e.preventDefault();
    const emailObj = { email };
    const data = await forgotPasswordApi(emailObj);
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
    console.log(data);
  };
  return (
    <form className="mt-4 p-2" onSubmit={handleEmailSubmit}>
      <label htmlFor="email" className="text-gray-500 block mx-5 text-sm">
        Email address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="w-full  md:w-[80%] border border-purple-600 p-3  rounded-[25px]"
        required
        onChange={handleEmailChange}
      />

      <button
        type="submit"
        className="w-full md:w-[80%] p-3 bg-[#05BDFF] text-center font-bold text-white text-lg rounded-[23px] mt-9
      hover:bg-purple-600 transition-colors
      "
      >
        Submit
      </button>
    </form>
  );
};

export default ForgetPasswordForm;
