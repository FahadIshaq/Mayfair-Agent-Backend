"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Input from "../ui/Input";
import Link from "next/link";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { registerUserApi } from "@/api/auth/authApi";
const SignupForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const passwordMatch = (value: any) => {
    const passwordValue = getValues("password");
    return passwordValue === value || "Passwords do not match.";
  };
  const onSubmit = async (data: any) => {
    localStorage.setItem("temp_user", JSON.stringify(data));
    const signup = await registerUserApi(data);
    if (signup.message) {
      toast.success(signup.message);
      localStorage.setItem("temp_otp", signup.otp);
      router.push("/");
    }
  };

  return (
    <form className="mt-4 p-2 " onSubmit={handleSubmit(onSubmit)}>
      <div className="flex align-center space-x-3 my-3">
        <input
          type="radio"
          id="tenant"
          className="w-6 h-6"
          required
          {...register("role", {
            required: "Please select the user role.",
          })}
          defaultChecked
          value="tenant"
          name="role"
        />
        <label htmlFor="tenant" className="text-lg">
          Tenant
        </label>
      </div>

      <div className="flex align-center space-x-3">
        <input
          type="radio"
          id="Landlord"
          className="w-6 h-6 bg-purple-600 text-purple-600"
          required
          {...register("user", {
            required: "Please select the user type.",
          })}
          value="landlord"
          name="user"
        />

        <label htmlFor="Landlord" className="text-lg">
          Landlord
        </label>
      </div>
      {errors.user && (
        <p className="text-red-500 text-sm mx-2 my-2">
          {errors.user.message?.toString()}
        </p>
      )}
      <div className=" flex flex-wrap justify-between mt-14 ">
        <div className="w-full md:w-[45%]">
          <Input
            label="First Name"
            type="text"
            id="firstName"
            className="md:w-full"
            required={true}
            {...register("firstName", {
              required: "First name is required.",
            })}
            name="firstName"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mx-2 my-1">
              {errors.firstName.message?.toString()}
            </p>
          )}
        </div>
        <div className="w-full md:w-[45%]">
          <Input
            label="Last Name"
            type="text"
            id="lastName"
            className="md:w-full"
            required={true}
            {...register("lastName", {
              required: "Last name is required.",
            })}
            name="lastName"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mx-2 my-1">
              {errors.lastName.message?.toString()}
            </p>
          )}
        </div>
        <div className="w-full md:w-[45%]">
          <Input
            label="Enter Your Email"
            type="email"
            id="email"
            className="md:w-full"
            required={true}
            placeholder="Example@email.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@.]+$/,
                message: "Invalid email format(email@example.com)",
              },
            })}
            name="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mx-2 my-1">
              {errors.email.message?.toString()}
            </p>
          )}
        </div>
        <div className="w-full md:w-[45%]">
          <Input
            label="Phone Number"
            type="number"
            id="phone"
            className="md:w-full"
            required={true}
            {...register("phone", {
              required: "Phone Number is required.",
            })}
            name="phone"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mx-2 my-1">
              {errors.phone.message?.toString()}
            </p>
          )}
        </div>

        <div className="w-full md:w-[45%]">
          <Input
            label="Company Name"
            type="text"
            id="companyName"
            className="md:w-full"
            required={true}
            {...register("companyName", {
              required: "Company name is required.",
            })}
            name="companyName"
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm mx-2 my-1">
              {errors.companyName.message?.toString()}
            </p>
          )}
        </div>

        <div className="w-full md:w-[45%]">
          <Input
            label="Company Website"
            type="text"
            id="companyWebsite"
            className="md:w-full"
            {...register("companyWebsite")}
            name="companyWebsite"
          />
          {errors.companyWebsite && (
            <p className="text-red-500 text-sm mx-2 my-1">
              {errors.companyWebsite.message?.toString()}
            </p>
          )}
        </div>
        <div className="w-full md:w-[45%]">
          <Input
            label="Job Title"
            type="text"
            id="jobTitle"
            className="md:w-full"
            {...register("jobTitle")}
            name="jobTitle"
          />
          {errors.jobTitle && (
            <p className="text-red-500 text-sm mx-2 my-1">
              {errors.jobTitle.message?.toString()}
            </p>
          )}
        </div>

        <div className="w-full md:w-[45%]">
          <Input
            label="Password"
            type="password"
            id="password"
            className="md:w-full"
            required={true}
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long.",
              },
            })}
            name="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mx-2 my-1">
              {errors.password.message?.toString()}
            </p>
          )}
        </div>

        <div className="w-full md:w-[45%]">
          <Input
            label="Confirm Password"
            type="password"
            id="c_password"
            className="md:w-full"
            required={true}
            {...register("c_password", {
              required: "Confirm Password is required.",
              validate: passwordMatch,
            })}
            name="c_password"
          />
          {errors.c_password && (
            <p className="text-red-500 text-sm mx-2 my-1">
              {errors.c_password.message?.toString()}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <p className="font-medium text-xl">T&C and GDPR</p>
        <div className="flex align-center space-x-3 my-6">
          <input
            type="radio"
            id="gdpr"
            className="w-9 h-6"
            required
            {...register("Accepting_terms", {
              required: "You must check this field.",
            })}
          />

          <label htmlFor="gdpr" className="text-sm text-gray-500">
            Please tick to confirm you are happy for Victor Harris to store your
            details. Click here to see our{" "}
            <Link href="" className="underline">
              Privacy Policy.
            </Link>
          </label>
          {errors.Accepting_terms && (
            <p className="text-red-500 text-sm mx-2 my-1">
              {errors.Accepting_terms.message?.toString()}
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full md:w-[35%] p-3 bg-[#05BDFF] text-center font-bold text-white text-lg rounded-[23px] mt-9 mb-9
        hover:bg-purple-600 transition-colors
        "
      >
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
