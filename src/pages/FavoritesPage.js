import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorite } from "../features/favoriteSlice";
import EmptyFavorites from "../components/EmptyFavorites";
import { useAuth } from "../components/AutoContext";

import { useNavigate } from "react-router-dom";
const FavoritesPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const favItems = useSelector((state) => state.favorite.favorites);

  // Early Return
  if (favItems.length === 0) {
    return <EmptyFavorites />;
  }

  const handleRemoveFavorite = (itemId) => {
    dispatch(removeFromFavorite(itemId));
  };
  if (!isAuthenticated) {
    navigate('/signin'); 
    alert("Login First");
    return null
  }
  return (
    <>
      <h1 className="text-center text-3xl text-green-500 font-bold mt-2">
        Favorite Items ({favItems?.length})
      </h1>
      <div className="mt-10 m-5 flex flex-wrap">
        {favItems.map((favItem) => (
          <div
            key={favItem.id}
            className="bg-gray-200 h-auto w-60 flex flex-row flex-wrap justify-center items-center m-3"
          >
            <div>
              <img
                src={favItem.image}
                alt={favItem.title}
                className="object-fill h-[130px] w-32"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-light m-2 text-center">{favItem.title}</h3>
              <p className="m-4 text-center">₹{favItem.amount}</p>
              <button
                onClick={() => handleRemoveFavorite(favItem.id)}
                className="bg-green-500 mt-2 text-white p-2 rounded"
              >
                Remove from Wishlist
                </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )}


export default FavoritesPage;
