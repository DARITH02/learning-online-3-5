import React from "react";
import { FaStar } from "react-icons/fa";

const Cart = ({ title, img, price, rate }) => {
  return (
    <>
      <div className="bg-gray-100 h-[450px] rounded-xl overflow-hidden shadow hover:shadow-md duration-75 transition-all">
        <div className="w-fu h-2/4">
          <img
            className="w-full h-full object-cover"
            src={img}
            alt=""
          />
        </div>

        <div className="px-4 py-1">
          <span className="text-blue-600 text-sm">Development</span>
          <h2 className="text-xl font-bold mt-1 line-clamp-1">{title}</h2>

          <h4 className="my-3.5">John Deo</h4>

          <div className="flex justify-between">
            <span className="flex items-center gap-2.5">
              <span>
                <FaStar className="text-amber-500" />
              </span>
              <span className="text-lg">
                <span className=" font-bold">{rate}</span>(1200)
              </span>
            </span>
            <span className="text-2xl font-bold text-blue-600">${price}</span>
          </div>

          <button className="text-gray-50 px-5 bg-blue-700 py-4 rounded-xl w-full mt-2.5">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
