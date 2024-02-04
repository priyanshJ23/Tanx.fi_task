import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl text-green-500 font-bold mt-4">Cart is Empty!</h2>
      <img
        src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
        alt="empty-cart-icon"
        className="h-[300px] mt-6 w-auto"
      />
      <Link to="/">
        <button className="w-40 h-12 rounded-xl text-white bg-green-500 mt-20">
          Do some shopping
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
