"use client";

import { resetPasswordApi } from "@/api/auth/authApi";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const ResetPasswordForm = () => {
  const router = useRouter();
  const params = useParams();
  const [newPass, setNewPass] = useState("");

  const handlePasswordChange = (e: any) => {
    setNewPass(e.target.value);
  };

  const handlePasswordSubmit = async (e: any) => {
    e.preventDefault();
    const passObj = { password: newPass };
    const { resetId } = params;
    const data = await resetPasswordApi(passObj, resetId);
    if (data.success) {
      toast.success(data.message);
      router.push("/");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <form className="mt-4 p-2" onSubmit={handlePasswordSubmit}>
      <label htmlFor="password" className="text-gray-500 block mx-5 text-sm">
        Enter New Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        className="w-full  md:w-[80%] border border-purple-600 p-3  rounded-[25px]"
        required
        onChange={handlePasswordChange}
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

export default ResetPasswordForm;
