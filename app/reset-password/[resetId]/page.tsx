import React from "react";
import Image from "next/image";
import bgdots from "../../../public/bgdots.png";
import loginSmbgleft from "../../../public/loginSmbgleft.svg";
import ForgotPasswordBanner from "../../../public/ForgotPasswordBanner.png";
import telephone from "../../../public/telphone.svg";
import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
const ResetPassword = () => {
  return (
    <section
      className=" w-full flex flex-col
    md:justify-between align-center
    md:flex-row md:h-[120vh]  "
    >
      <div
        className="w-full relative md:basis-[45%]
      md:p-16 md:bg-login-lg-bgleft bg-no-repeat bg-cover
     
      "
      >
        <Image
          src={loginSmbgleft}
          className="absolute w-full bottom-0 z-[-1] md:hidden"
          alt="bg"
        ></Image>

        <h3 className=" text-gray-800 text-3xl font-semibold text-center pt-5 md:text-start md:text-4xl">
          Change Your Password
        </h3>
        <p className=" text-lg md:text-[.9rem] md:text-start text-center text-gray-800 my-3 p-2 md:p-0">
          Please add new password for your account in the following field.
          <br />
          If you experience any problem please call us on
        </p>
        <p className="text-center md:text-start">
          <a href="#" className="text-lg text-[#05BDFF]">
            <Image src={telephone} className="inline" alt="bg"></Image>
            123456789
          </a>
        </p>

        <ResetPasswordForm />
      </div>

      <div
        className="mt-36 md:mt-0 mb-12
      
      md:h-screen
      md:mb-0 md:basis-[48%]
      md:flex md:align-center
      md:bg-loginbgright bg-contain bg-no-repeat
      "
      >
        <div
          className="w-[96%] border shadow-xl flex justify-center
        text-center relative h-[250px] md:h-[300px] mx-3 bg-white rounded-lg md:mt-auto
        "
        >
          <Image
            className=" hidden md:block w-36 absolute left-[-2rem] z-[-1] bottom-0 md:bottom-12 "
            src={bgdots}
            alt="login page image"
          ></Image>
          <Image
            className="w-96 absolute bottom-0 md:bottom-12 "
            src={ForgotPasswordBanner}
            alt="login page image"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
