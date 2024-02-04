import React from "react";

const CardShimmer = () => {
  const shimmerCards = Array.from({ length: 12 }, (_, index) => (
    <div key={index} className="bg-gray-300 m-8 h-[240px] w-52"></div>
  ));

  return (
    <div className="flex justify-center items-center flex-wrap gap-1">
      {shimmerCards}
    </div>
  );
};

export default CardShimmer;
