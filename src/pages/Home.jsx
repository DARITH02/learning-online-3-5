import React from "react";
import { FaStar } from "react-icons/fa";
import Cart from "../components/Cart";

import { courses } from "../data/data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full md:w-4/5 shadow mx-auto my-4 md:p-5">
      <div className="bg-blue-600 px-2.5 py-5 md:flex md:px-6 md:py-7 rounded-lg">
        <div className="w-full md:w-full lg:w-3/5 ">
          <h1 className="text-7xl font-bold text-gray-50">
            Learn Without Limits
          </h1>

          <p className="text-2xl text-gray-50 mt-3.5">
            Start, switch, or advance your career with thousands of courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>

          <div className="flex gap-7 mt-9">
            <button className="bg-gray-200 py-4 px-9 rounded-xl text-blue-600 font-medium">
              Get Start
            </button>

            <button className="bg-transparent border border-gray-200 py-4 px-9 rounded-xl text-gray-50 font-medium hover:bg-gray-200 hover:text-blue-700">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="w-full md:h-full lg:w-2/5 md:p-7 mt-3.5 ">
          <ul className="bg-gray-50 p-5 rounded-xl flex flex-col gap-3.5">
            <li className="flex gap-2.5">
              <div className="w-15 h-15 bg-blue-300 rounded-2xl p-2">
                <img
                  className=""
                  src="https://img.icons8.com/?size=100&id=43593&format=png&color=000000"
                  alt=""
                />
              </div>
              <span>
                <h3 className="font-bold text-xl">500 Courses</h3>
                <p className="text-blue-500">Available now</p>
              </span>
            </li>
            <li className="flex gap-2.5">
              <div className="w-15 h-15 bg-blue-300 rounded-2xl p-2">
                <img
                  className=""
                  src="https://img.icons8.com/?size=100&id=43593&format=png&color=000000"
                  alt=""
                />
              </div>
              <span>
                <h3 className="font-bold text-xl">500 Courses</h3>
                <p className="text-blue-500">Available now</p>
              </span>
            </li>
            <li className="flex gap-2.5">
              <div className="w-15 h-15 bg-blue-300 rounded-2xl p-2">
                <img
                  className=""
                  src="https://img.icons8.com/?size=100&id=43593&format=png&color=000000"
                  alt=""
                />
              </div>
              <span>
                <h3 className="font-bold text-xl">500 Courses</h3>
                <p className="text-blue-500">Available now</p>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 bg-gray-50 shadow">
        <div className="flex flex-col justify-center items-center py-15 ">
          <h1 className="text-4xl font-bold text-blue-600">50K+</h1>
          <p className="text-md mt-1">Active Students</p>
        </div>

        <div className="flex flex-col justify-center  items-center py-15 ">
          <h1 className="text-4xl font-bold text-blue-600">50K+</h1>
          <p className="text-md mt-1">Active Students</p>
        </div>
        <div className="flex flex-col justify-center  items-center py-15 ">
          <h1 className="text-4xl font-bold text-blue-600">50K+</h1>
          <p className="text-md mt-1">Active Students</p>
        </div>
        <div className="flex flex-col justify-center  items-center py-15 ">
          <h1 className="text-4xl font-bold text-blue-600">50K+</h1>
          <p className="text-md mt-1">Active Students</p>
        </div>
      </div>

      <div className="mt-16">
        <h1 className="text-center text-4xl font-bold">
          Explore Top Categories
        </h1>
        <p className="text-center text-xl mt-2">
          Choose from hundreds of courses across different categories
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <div
            className="p-5 rounded-lg border border-gray-400 flex flex-col justify-center 
          items-center m-3 hover:shadow-lg duration-150 transition-all cursor-pointer"
          >
            <img
              className="w-16"
              src="https://img.icons8.com/?size=100&id=nK5KokYOqcnT&format=png&color=000000"
              alt=""
            />
            <h2 className="mt-2.5 font-bold text-lg">Development</h2>
            <p>120 Courses</p>
          </div>
          <div
            className="p-5 rounded-lg border border-gray-400 flex flex-col justify-center 
          items-center m-3 hover:shadow-lg duration-150 transition-all cursor-pointer"
          >
            <img
              className="w-16"
              src="https://img.icons8.com/?size=100&id=nK5KokYOqcnT&format=png&color=000000"
              alt=""
            />
            <h2 className="mt-2.5 font-bold text-lg">Development</h2>
            <p>120 Courses</p>
          </div>{" "}
          <div
            className="p-5 rounded-lg border border-gray-400 flex flex-col justify-center 
          items-center m-3 hover:shadow-lg duration-150 transition-all cursor-pointer"
          >
            <img
              className="w-16"
              src="https://img.icons8.com/?size=100&id=nK5KokYOqcnT&format=png&color=000000"
              alt=""
            />
            <h2 className="mt-2.5 font-bold text-lg">Development</h2>
            <p>120 Courses</p>
          </div>{" "}
          <div
            className="p-5 rounded-lg border border-gray-400 flex flex-col justify-center 
          items-center m-3 hover:shadow-lg duration-150 transition-all cursor-pointer"
          >
            <img
              className="w-16"
              src="https://img.icons8.com/?size=100&id=nK5KokYOqcnT&format=png&color=000000"
              alt=""
            />
            <h2 className="mt-2.5 font-bold text-lg">Development</h2>
            <p>120 Courses</p>
          </div>{" "}
          <div
            className="p-5 rounded-lg border border-gray-400 flex flex-col justify-center 
          items-center m-3 hover:shadow-lg duration-150 transition-all cursor-pointer"
          >
            <img
              className="w-16"
              src="https://img.icons8.com/?size=100&id=nK5KokYOqcnT&format=png&color=000000"
              alt=""
            />
            <h2 className="mt-2.5 font-bold text-lg">Development</h2>
            <p>120 Courses</p>
          </div>
          <div
            className="p-5 rounded-lg border border-gray-400 flex flex-col justify-center 
          items-center m-3 hover:shadow-lg duration-150 transition-all cursor-pointer"
          >
            <img
              className="w-16"
              src="https://img.icons8.com/?size=100&id=nK5KokYOqcnT&format=png&color=000000"
              alt=""
            />
            <h2 className="mt-2.5 font-bold text-lg">Development</h2>
            <p>120 Courses</p>
          </div>
        </div>
      </div>

      <div className="mt-12 shadow-xl  ">
        <h1 className="pt-20 font-bold text-4xl text-center">
          Featured Courses
        </h1>
        <p className="text-center text-xl mt-2.5">
          Most popular courses chosen by our students
        </p>

        <div
          className=" md:mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
         gap-5 md:px-2 md:py-3"
        >
          {courses.map((c) => (
            
            <Link to={`/detail/${c['id']}`}>

              <Cart title={c.title} price={c.price} rate={c.rate} img={c.img} />
           
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
