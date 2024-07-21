"use client";
import { contactApi } from "@/api/contact/contactApi";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await contactApi(formState);
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4 mt-8">
        {[
          { type: "text", placeholder: "Full Name", name: "name" },
          { type: "email", placeholder: "Email", name: "email" },
        ].map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#333] outline-none"
            onChange={handleChange}
            required
          />
        ))}
        <textarea
          name="message"
          placeholder="Write Message"
          className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#333] outline-none"
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="mt-8 flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semibold bg-[#05BDFF] text-white hover:bg-purple-900"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
