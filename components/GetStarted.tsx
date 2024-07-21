import React from "react";

const GetStarted = () => {
  return (
    <div className="min-h-[380px] mx-auto bg-[url(/newsletter-bg.png)] bg-opacity-80 object-center my-5 rounded-lg relative h-full max-w-6xl  flex flex-col justify-center items-center text-center text-white p-6">
      <h2 className="sm:text-4xl text-2xl font-bold mb-6">Get Started</h2>
      <p className="text-lg w-[50vw] text-center text-gray-200">
        Sign up to Victor Harris to hear about exciting new property launches,
        stunning properties, marketing information and more.
      </p>
      <button
        type="button"
        className="mt-8 flex items-center justify-center text-sm w-[20vw] rounded-xl px-4 py-2.5 font-semibold bg-[#05BDFF]  text-white hover:bg-purple-900"
      >
        Submit
      </button>
    </div>
  );
};

export default GetStarted;
