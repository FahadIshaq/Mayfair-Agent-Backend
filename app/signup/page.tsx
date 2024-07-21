import React from "react";
import Link from "next/link";
import Image from "next/image";
import bgdots from "../../public/bgdots.png";

import createAccountBanner from "../../public/createAccountBanner.png";
import SignupForm from "@/components/forms/SignupForm";
import { CarouselSize } from "@/components/Carousel";
const Signup = () => {
  return (
    <section
      className=" w-full flex flex-col
    md:justify-between align-center
    lg:flex-row md:h-auto lg:h-auto bg-login-sm-bgleft bg-no-repeat bg-contain md:bg-none p-2 md:p-0  "
    >
      <div
        className="w-full relative md:basis-[40%] lg:basis-[50%]
        bg-loginSmbgleft
      md:p-16 md:bg-login-lg-bgleft bg-no-repeat bg-cover

      "
      >
        <h3 className=" text-gray-800 text-3xl font-semibold text-center pt-5 md:text-start md:text-4xl ">
          Create an Account
        </h3>
        <p className=" text-lg md:text-lg md:text-start text-center font-medium text-gray-800 my-3">
          Already have a Victor Harris account?
          <Link href="/login" className="text-[#05BDFF] underline">
        
            Log in
          </Link>
        </p>
        <p className="text-lg md:text-lg md:text-start text-center font-bold text-gray-800 my-3 mt-9">
          Please define user
        </p>

        <SignupForm />
      </div>

      <div
        className="mt-36 lg:mt-0 md:mt-14 mb-12
      h-full
      md:h-[140vh]
      md:mb-5 md:basis-[45%]
      md:flex md:flex-col md:align-center
      md:bg-loginbgright bg-contain bg-no-repeat 
      "
      >
        <div
          className="w-[96%] border shadow-xl flex justify-center
        text-center relative h-[300px]   md:h-[350px] mx-3 bg-white rounded-lg md:mt-auto 
        "
        >
          <Image
            className=" hidden md:block w-36 absolute left-[-2rem] z-[-1] bottom-0 md:bottom-12 "
            src={bgdots}
            alt="login page image"
          ></Image>
          <Image
            className="w-96 absolute  bottom-32 md:bottom-28 "
            src={createAccountBanner}
            alt="login page image"
          ></Image>
          <div className=" flex flex-col justify-end p-4 ">
            <p className="  pt-4 pb-2 font-semibold text-2xl">
              Get the latest updates on office spaces, manage your properties.
            </p>
          </div>
        </div>



        <div className=" w-[70%] md:w-full mx-auto md:mx-0 mt-3 flex flex-col justify-center items-center ">
          <p className="text-3xl my-6 font-bold">Trusted By</p>  
          <CarouselSize />
        </div>
      </div>
    </section>
  );
};

export default Signup;
