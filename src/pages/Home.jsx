import React from "react";

const Home = () => {
  return (
    <div className="w-full md:w-4/5 shadow mx-auto my-4 p-5">
      <div className="bg-blue-600 flex md:px-6 md:py-7 rounded-lg">
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

        <div className="w-full md:h-full lg:w-2/5 bg-blue-400">2</div>
      </div>
    </div>
  );
};

export default Home;
