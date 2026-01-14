import React from "react";
import { FcAbout } from "react-icons/fc";
import { HiOutlineHome } from "react-icons/hi";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <nav className="shadow-md">
        <div className="w-full md:w-4/5 px-3.5  m-auto flex justify-between">
          <div className="w-16">
            <img
              className="w-full h-full"
              src="https://etec-system.42web.io/assets/etec.png"
              alt=""
            />
          </div>

          <div className="h-16 hidden md:block">
            <ul className="flex gap-3.5 items-center h-full ">
              <li>
                <Link
                  to={"/"}
                  className="flex gap-1.5 items-center text-lg font-medium"
                >
                  <HiOutlineHome className="text-xl" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="flex gap-1.5 items-center text-lg font-medium"
                >
                  <FcAbout className="text-xl" />
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* mobile */}
          <div className="md:hidden h-16 flex items-center">
            <span>
              <IoMenuSharp
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl"
              />
            </span>
          </div>

          <div
            className={`h-screen w-4/5 absolute bg-gray-50 top-16 duration-200 transition-all ease-in-out shadow-2xl ${
              menuOpen ? "right-0" : "-right-full md:hidden"
            }`}
          >
            <ul className="px-3 py-2.5">
              <li className="font-bold text-4xl text-center text-blue-400">
                Menu
              </li>
              <li className="mb-1.5 border-b-gray-300 border-b">
                <Link
                  to={"/"}
                  className="hover:bg-blue-100 duration-150 transition-all block py-1.5 px-2  rounded-md"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1.5 border-b-gray-300 border-b">
                <Link
                  to={"/about"}
                  className="hover:bg-blue-100 duration-150 transition-all block py-1.5 px-2  rounded-md"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
