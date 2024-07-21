// components/AboutSuccess.tsx
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const AboutSuccess: React.FC = () => (
  <section className="py-10 sm:py-16 lg:py-18">
    <div className="px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Crafting Success, Every Step of the Way
        </h2>
        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
          Unleash Your Potential with Victor Harris
        </p>
      </div>

      <ul className="max-w-5xl mx-auto mt-16 space-y-12">
        {/* Step 1 */}
        <li className="relative flex items-start">
          <div
            className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
            aria-hidden="true"
          ></div>

          <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
            <svg
              className="w-10 h-10 text-fuchsia-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejun="round"
                stroke-width="1"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div className="ml-6">
            <h3 className="text-lg font-semibold text-black">
              Step 1: Unlocking Unparalleled Expertise
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Embark on your journey to success with Victor Harris, where
              decades of experience converge with a commitment to excellence.
              Our seasoned team navigates the dynamic commercial property
              market, ensuring you benefit from unmatched expertise. Join us in
              shaping success with every move.
            </p>
            <p className="mt-4 text-base text-gray-600">
              <Link href="/">
                Create a free account and delve into a world of possibilities.
              </Link>
            </p>
          </div>
        </li>

        {/* Step 2 */}
        <li className="relative flex items-start">
          <div
            className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
            aria-hidden="true"
          ></div>

          <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
            <svg
              className="w-10 h-10 text-fuchsia-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
          </div>
          <div className="ml-6">
            <h3 className="text-lg font-semibold text-black">
              Step 2: Tailoring Solutions to Your Vision
            </h3>
            <p className="mt-4 text-base text-gray-600">
              At Victor Harris, we understand the power of tailored solutions.
              No two businesses are alike, and neither should be their office
              spaces. Collaborate with us to define your unique needs, whether
              you're a thriving team of five or a corporate powerhouse of five
              hundred. Our blend of traditional methods and cutting-edge
              technology provides a comprehensive search, covering 98% of
              available commercial listings across London.
            </p>
            <p className="mt-4 text-base text-gray-600">
              <Link href="/">
                Build your website of success, brick by personalized brick.
              </Link>
            </p>
          </div>
        </li>

        {/* Step 3 */}
        <li className="relative flex items-start">
          <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
            <svg
              className="w-10 h-10 text-fuchsia-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div className="ml-6">
            <h3 className="text-lg font-semibold text-black">
              Step 3: Seamless Transitions, Stress-Free Moves
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Victor Harris takes pride in making your office move effortless.
              Transparency is our cornerstone as we work closely with landlords
              and tenants, removing the stress from sourcing, negotiating, and
              managing your move. Benefit from 30 years of negotiation prowess
              to secure the best prices and terms for your contract. We'll be
              with you every step of the way, ensuring you can simply move in
              and focus on what truly matters.
            </p>
            <p className="mt-4 text-base text-gray-600">
              <Link href="/">
                Release and launch into a new era of success with Victor Harris.
              </Link>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default AboutSuccess;
