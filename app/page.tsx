import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="text-center mt-10 py-4">
      <h1 className="text-3xl font-bold mb-6">Home Page Under Construction</h1>
      <p className="text-gray-600 mb-8">
        We're currently working on our home page. In the meantime, feel free to
        explore our other pages.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          href="/adminLogin"
          className="bg-black hover:bg-gray-600 text-white py-2 px-4 rounded-md"
        >
          Admin Login
        </Link>
        <Link
          href="/Contact"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Contact
        </Link>
        <Link
          href="/About"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Home;
