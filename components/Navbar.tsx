"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import Cookies from "js-cookie";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About Us" },
  { href: "#", label: "Office Search" },
  { href: "#", label: "Our Services" },
  { href: "/Contact", label: "Contact Us" },
  { href: "#", label: "Locations" },
];

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [authenticated, isAuthicated] = useState(false);
  const [user, setUser] = useState();

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("victor-harris-user");
    setIsOpen(false);
  };

  useEffect(() => {
    const tempUser = localStorage.getItem("victor-harris-user");
    const loggedInUser = tempUser ? JSON.parse(tempUser) : null;
    setUser(loggedInUser);
    const token = Cookies.get("token");

    if (token && loggedInUser) {
      isAuthicated(true);
    }
  }, [isOpen]);

  return (
    <nav className="bg-[url(/nav-bg.png)] object-contain min-h-min md:py-4 px-3 lg:px-0">
      <div className="max-w-8xl mx-auto">
        <div className="flex mx-auto justify-between w-6/6 ">
          <div className="flex items-center gap-16 ml-6 lg:mx-auto my-4">
            <div>
              <Link
                href="/"
                className="flex gap-1 font-bold text-white items-center"
              >
                <Image
                  src="/Logo.png"
                  width={150}
                  height={150}
                  alt="logo of victorharris"
                />
              </Link>
            </div>
            <div className="hidden lg:flex gap-8  text-white font-semibold text-sm">
              {menuLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="hidden lg:flex text-white font-semibold text-sm p-6 justify-center items-center space-x-4">
              {!authenticated && (
                <>
                  <Link
                    href="/signup"
                    className=" border-white border-e-2 pr-3"
                  >
                    Signup
                  </Link>

                  <Link href="/login">Login</Link>
                </>
              )}

              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-transparent text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <CircleUserRound className="text-3xl" />
                  </button>
                </div>

                {isOpen && (
                  <div className="origin-top-right z-1 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                {toggleMenu ? (
                  <X className="text-white" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed left-0 z-40 w-full bg-[#05BDFF] overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col mt-3 gap-8 font-bold tracking-wider">
            {menuLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
