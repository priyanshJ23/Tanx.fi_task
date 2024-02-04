import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useAuth } from './AutoContext'; // Import your authentication context

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const favItems = useSelector((state) => state.favorite.favorites);

  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate(); // Replace with useHistory if using BrowserRouter
  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to the home page after logout
  };
  return (
    <div className="h-16 w-full bg-green-500 flex justify-around items-center">
      <div className="text-white font-semibold text-2xl">
        <Link to="/">
          <h1>ShopKart.</h1>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-8 text-white">
        <Link to="/">
          <p className="border-2 border-gray-200 p-2 rounded-md">Products</p>
        </Link>
        {/* if user is authenticated show logout else show login button */}

        <Link to="/favorites">
          <span className="flex items-center">
            <FaHeart color="black" />
               <span className="-mt-4 -mr-1 font-bold text-red-600">
              {favItems.length}
            </span>
          </span>
       
        </Link>
        <Link to="/cart">
          <span className="flex items-center">
            <FaCartShopping color="black" />{" "}  <span className="-mt-4 -mr-1 font-bold text-red-600">
              ({cartItems.length})
            </span>
          </span>
        
        </Link>

        <div>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="text-white">
            Logout
          </button>
        ) : (
          <Link to="/Signup" className="text-white">
            Login
          </Link>
        )}
      </div>
      </div>
    </div>
  );
};

export default Header;
