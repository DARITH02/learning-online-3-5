import React from "react";
import { FcAbout } from "react-icons/fc";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="shadow-md">
        <div className="w-full md:w-4/5  m-auto flex justify-between">
          <div className="w-16">
            <img
              className="w-full h-full"
              src="https://etec-system.42web.io/assets/etec.png"
              alt=""
            />
          </div>

          <div className="h-16">
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
        </div>
      </nav>
    </>
  );
};

export default Header;
