import React from "react";
import Link from "next/link";
import Image from "next/image";
import loginbg from "../../public/loginimg.webp";
import bgdots from "../../public/bgdots.png";
import loginSmbgleft from "../../public/loginSmbgleft.svg";
import LoginForm from "@/components/forms/LoginForm";
const Login = () => {
  return (
    <section
      className=" w-full flex flex-col
    md:justify-between align-center
    md:flex-row md:h-[120vh]   bg-login-sm-bgleft bg-no-repeat bg-contain md:bg-none p-2 md:p-0"
    >
      <div
        className="w-full relative md:basis-[45%] 
      md:p-10 md:bg-login-lg-bgleft bg-no-repeat bg-cover
      "
      >
        <h3 className=" text-gray-800 text-3xl font-semibold text-center pt-5 md:text-start md:text-[2rem]  ">
          Log in and manage your dashboard
        </h3>
        <p className=" text-lg md:text-[.9rem] md:text-start text-center text-gray-800 my-3">
          Enter your details to log in.
        </p>
        <Link href="/signup" className="w-full p-2">
          <button className="w-[96%] md:w-[80%] mx-auto p-2 py-3 bg-[#242C4C] text-center font-bold text-white text-lg rounded-[23px]  hover:bg-purple-600 transition-colors">
            Create New User Account
          </button>
        </Link>
      
          <LoginForm />
       
        
        <Link
          href="/forgot-password"
          className="w-full md:w-[80%] block mt-2 mb-10 text-md text-[#05BDFF] underline font-semibold text-center
          hover:text-purple-600 transition-colors
          "
        >
          Forgot password?
        </Link>
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
            src={loginbg}
            alt="login page image"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Login;
