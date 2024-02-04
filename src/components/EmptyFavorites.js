import React from "react";
import { Link } from "react-router-dom";

const EmptyFavorites = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl text-greem-500  mt-4">
        No Wishlist Added
      </h2>
      <Link to="/">
        <button className="w-40 h-12 -ml-16 rounded-xl text-white bg-green-500 mt-20">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default EmptyFavorites;
