import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {user} = useSelector(state => state.user)

  const isAdmin = true
  return (
    <div className="border-b sticky top-0 py-4 bg-white z-50 shadow">
      <div
        className="max-w-6xl mx-auto px-4 flex justify-between 
       items-center"
      >
        {/* left */}
        <div className="hidden md:flex gap-1 items-center">
          <span className="text-lg text-slate-800">EN</span>
          <input type="text" placeholder="search" />
        </div>

        {/* middle */}
        <div className="text-2xl font-semibold text-slate-950">
          <Link to="/">E-Store</Link>
        </div>

        {/* right */}
        <div className="flex gap-2 items-center uppercase">
          {user ? (
            <span className="cursor-pointer">logout</span>
          ) : (
            <>
              <Link to="/register">
                <span className="cursor-pointer">Register</span>
              </Link>

              <Link to="/login">
                <span className="cursor-pointer">login</span>
              </Link>
            </>
          )}
          <Link to='/cart'>
            <div className="relative">
              <CiShoppingCart size={30} />
              <div
                className="absolute top-0 left-4 
            bg-red-600 text-white w-4 h-4 rounded-full
            flex justify-center items-center"
              >
                1
              </div>
            </div>
          </Link>
          {isAdmin && <Link to='/dashboard/productlist'>
            <span className="ml-3">Dashboard</span>
          </Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
