"use client";
import { useRouter } from "next/navigation";
import { otpVerificationApi, registerUserApi } from "@/api/auth/authApi";
import toast from "react-hot-toast";
import React, { useState, useRef } from "react";
import Cookies from "js-cookie";

const OtpForm = () => {
  const router = useRouter();
  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array.from({ length: 6 }).map(() => null)
  );

  const handleInput = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (index < 5 && value.length === 1) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const sendOtpAgain = async () => {
    const tempUser = localStorage.getItem("temp_user");
    const user = tempUser ? { user: JSON.parse(tempUser) } : null;
    const signup = await registerUserApi(user?.user);
    if (signup.message) {
      toast.success(signup.message);
      localStorage.setItem("temp_otp", signup.otp);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = otpValues.every((value) => /^.*$/.test(value));
    if (!isValid) {
      setError("Please enter a valid OTP.");
    } else {
      setError("");
      const otpValue = otpValues.join("");
      console.log("Valid OTP:", otpValue);
      const compareOtp = localStorage.getItem("temp_otp");
      if (compareOtp === otpValue) {
        const tempUser = localStorage.getItem("temp_user");
        const user = tempUser ? { user: JSON.parse(tempUser) } : null;
        const otpApproved = await otpVerificationApi(user);
        if (otpApproved.success) {
          toast.success(otpApproved.message);
          Cookies.set("token", otpApproved.token, { expires: 7, secure: true });
          localStorage.setItem(
            "victor-harris-user",
            JSON.stringify(otpApproved.user)
          );
          localStorage.removeItem("temp_otp");
          localStorage.removeItem("temp_user");
          router.push("/");
        } else {
          toast.error(otpApproved.message);
        }
      } else {
        toast.error("OTP is invalid");
      }
    }
  };

  return (
    <form className="mt-4 p-4" onSubmit={handleSubmit}>
      <label htmlFor="otp" className="block mx-5 text-sm"></label>
      <div className="flex space-x-1">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            type="text"
            id={`otp-${index}`}
            className="w-full text-center text-2xl font-bold md:w-[80%] border border-purple-600 p-3 rounded-md focus:outline-none focus:bg-sky-100"
            value={otpValues[index]}
            onChange={(e) => handleInput(index, e.target.value)}
            maxLength={1}
            ref={(el) => el && (inputRefs.current[index] = el)}
          />
        ))}
      </div>

      {error && <p className="text-red-500 mx-2 my-1">{error}</p>}
      <p className="mt-3 text-sm">
        Didn't get an OTP?
        <span
          className="text-[#05BDFF] underline cursor-pointer"
          onClick={sendOtpAgain}
        >
          Send Again
        </span>
      </p>
      <div className="w-full text-center md:text-start">
        <button
          type="submit"
          className="w-[40%] p-3 bg-[#05BDFF] text-center font-bold text-white text-lg rounded-[23px] mt-9 hover:bg-purple-600 transition-colors"
        >
          Verify
        </button>
      </div>
    </form>
  );
};

export default OtpForm;
