import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import CardShimmer from "./CardShimmer";

const ProductCard = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProductsData(data);
    } catch (error) {
      console.log("Error in fetching data from API", error);
    }
  };
  if (productsData.length === 0) {
    return <CardShimmer />;
  }
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 m-6 py-4 my-4">
      {productsData.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <div>
            <Product product={product} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
