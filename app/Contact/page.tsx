import React from "react";
import GetStarted from "./../../components/GetStarted";
import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";

const contactInfo = {
  phone: "020 7183 8458",
  email: "info@victorharris.co.uk",
  address: {
    line1: "Victor Harris Commercial Ltd",
    line2: "62 Grosvenor St",
    city: "London",
    postalCode: "W1K 3JF",
  },
  socialMedia: [
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/company/victor-harris-commercial-limited/",
    },
    {
      platform: "Facebook",
      link: "https://www.facebook.com/VictorHarrisCommercial",
    },
    { platform: "Twitter", link: "https://twitter.com/victorharriscom" },
  ],
};

const Contact = () => {
  return (
    <>
      <img src="/contact-banner.png" alt="" className="relative" />
      <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-10 max-w-6xl mx-auto bg-white text-[#333] my-2">
        <div>
          <h2 className="text-3xl font-extrabold"> Get in touch with us.</h2>
          <p className="text-sm text-gray-400 mt-3">
            We would love to hear from you! Contact Victor Harris today and hear
            about 1000’s of available commercial properties we have readily
            available. All enquiries will be responded to within the hour.
          </p>
          <ContactForm />
        </div>
        <ContactInfo />
      </div>
      <GetStarted />
    </>
  );
};

const ContactInfo = () => (
  <div className="z-10 relative h-full gap-6 flex flex-col max-md:min-h-[350px] bg-[#233554] p-4 rounded-md">
    <Image src="/Logo.png" alt="Victor Harris Logo" width={100} height={100} />

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9932.35908893675!2d-0.146808!3d51.511569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052b23c90a9b%3A0xd087513ae02986b2!2sVictor%20Harris%20Commercial%20-%20Mayfair%20Office!5e0!3m2!1sen!2sus!4v1707317332081!5m2!1sen!2sus"
      className="left-0 top-0 h-[40vh] w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
    ></iframe>

    <div className="bg-white text-[#233554] rounded-lg p-3">
      <ContactDetails />
    </div>

    <div className="bg-white flex justify-around flex-row gap-5 text-[#233554] rounded-lg p-5">
      <Image src="/map.png" alt="Map" width={100} height={100} />
      <div className="">
        <h1 className="font-bold bg-white text-[#233554]">
          Victor Harris Office
        </h1>
        <p className="w-[70%]">
          {contactInfo.address.line1} <br />
          {contactInfo.address.line2} <br />
          {contactInfo.address.city} {contactInfo.address.postalCode}
        </p>
      </div>
    </div>
  </div>
);

const ContactDetails = () => (
  <>
    <h3 className="font-bold">Phone</h3>
    <div className="phone">
      <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
    </div>
    <h3 className="font-bold">Email</h3>
    <div className="mail">
      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
    </div>

    <h3 className="font-bold pb-3">Follow Us</h3>
    <ul className="flex flex-row gap-2 flex-wrap align-items-center">
      {contactInfo.socialMedia.map((social, index) => (
        <li key={index}>
          <a href={social.link} target="_blank">
            <Image
              src={`/${social.platform.toLowerCase()}.png`}
              alt={social.platform}
              width={30}
              height={30}
            />
          </a>
        </li>
      ))}
    </ul>
  </>
);

export default Contact;
