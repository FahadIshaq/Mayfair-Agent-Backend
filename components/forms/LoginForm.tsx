"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import { loginUserApi } from "@/api/auth/authApi";
import { setLocalStorageItem } from "@/lib/util";

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const login = await loginUserApi(data);
      console.log(login);
      if (login?.data) {
        Cookies.set("token", login.data.token, { expires: 7, secure: true });
        setLocalStorageItem("admin", login.data.token);
        setLocalStorageItem("adminData", JSON.stringify(login.data.user));
        router.push("/admin");
      }
    } catch (error) {
      toast.error("error");
    }
  };

  return (
    <form className="mt-4 p-2" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email address"
        type="email"
        id="email"
        required={true}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@.]+$/,
            message: "Invalid email format(email@example.com)",
          },
        })}
      />
      {errors.email && (
        <p className="text-red-500 mx-2 my-1">
          {errors.email.message?.toString()}
        </p>
      )}
      <Input
        label="Password"
        type="password"
        id="password"
        login="true"
        required={true}
        minLength={6}
        {...register("password", {
          required: "Password is required.",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long.",
          },
        })}
      />
      {errors.password && (
        <p className="text-red-500 mx-2 my-1">
          {errors.password.message?.toString()}
        </p>
      )}

      <button
        type="submit"
        className="w-full md:w-[80%] p-3 bg-[#05BDFF] text-center font-bold text-white text-lg rounded-[23px] mt-9 hover:bg-purple-600 transition-colors"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
