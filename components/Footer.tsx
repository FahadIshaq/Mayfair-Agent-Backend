import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
interface FooterLink {
  href: string;
  label: string;
}

const footerLinks: { company: FooterLink[]; contact: FooterLink[] } = {
  company: [
    { href: "/About", label: "About Us" },
    { href: "#", label: "Office Search" },
    { href: "/Contact", label: "Contact Us" },
    { href: "#", label: "News" },
    { href: "#", label: "Privacy Policy" },
  ],
  contact: [
    { href: "#", label: "020 7183 8458" },
    { href: "#", label: "info@victorharris.co.uk" },
  ],
};

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => { 
  const contactIcons=[<Phone/>,<Mail/>]
  return (
  <div>
    <p className="text-xl font-semibold tracking-widest text-[#05BDFF] uppercase w-max">
  {title}
    </p>

    <div className="flex flex-col gap-8 text-white">
      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.label} className="flex space-x-2">
           {link.label=="020 7183 8458"? <Phone className="w-4"/>:""}
           {link.label.includes('@')? <Mail className="w-4"/>:""}
            <Link
              href={link.href}
              className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);}


const Footer: React.FC = () => (
  <section className="py-10 bg-[url(/nav-bg.png)] bg-gray-200 sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-8">
        <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
          <Image
            className="w-auto h-14"
            src="/Logo.png"
            alt=""
            width={100}
            height={100}
          />

          <p className="text-base leading-relaxed text-white mt-7">
            Victor Harris Commercial Ltd are an established firm of property
            surveyors located in Mayfair, London. We have been providing
            property services for over 30 years.
          </p>
        </div>
        <div className="col-span-2 sm:col-span-1">
    <FooterSection title="Our Company" links={footerLinks.company} />
  </div>

  <div className="col-span-2 sm:col-span-2">
    
    <FooterSection title="Contact us" links={footerLinks.contact} />
  </div>

        
      </div>

      <hr className="mt-16 mb-10 border-gray-600" />

      <p className="text-sm text-center text-gray-300">
        © Copyright 2024, All Rights Reserved by victorharris
      </p>
    </div>
  </section>
);

export default Footer;
