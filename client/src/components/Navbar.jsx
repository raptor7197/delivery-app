import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { useAppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { user, setUser, setShowUserLogin, navigate } = useAppContext(false);
  const logout = async () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img className="h-9" src={assets.logo} alt="logo" />
        </NavLink>

       
        <div className="hidden sm:flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">All Products</NavLink>
          <NavLink href="/">Contact</NavLink>

          
          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            
            <img src={assets.search_icon} alt="search" />
          </div>

          <div onClick={()=> navigate("cart")} className="relative cursor-pointer">
           
            <img src={assets.cart_icon} alt="cart" />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-teal-500 w-[18px] h-[18px] rounded-full">3
              
            </button>
          </div>

          {!user ? (
            <button
              onClick={() => {
                setShowUserLogin(true);
                setOpen(false);
              }}
              className="cursor-pointer px-8 py-2 bg-teal-500 hover:bg-teal-600 transition text-white rounded-full"
            >
              Login
            </button>
          ) : (
            <div className="relative  group">
              <img
                src={assets.profile_icon}
                alt="user icon"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-300 rounded-md text-sm z-40 w-30 p-4">
                <li
                  onClick={() => navigate("my-orders")}
                  className="p-1.5 pl-2 hover:bg-primary/10 cursor-pointer"
                >
                  My orders{" "}
                </li>
                <li
                  onClick={logout}
                  className="p-1.5 pl-2 hover:bg-primary/10 cursor-pointer"
                >
                  {" "}
                  Logout{" "}
                </li>
              </ul>
            </div>
          )}
        </div>

        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          <img src={assets.menu_icon} alt="menu" />
          
        </button>

        
        {open && (
          <div
            className={`${
              open ? "flex" : "hidden"
            } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-center gap-2 px-5 text-sm md:hidden`}
          >
            <NavLink to="/" onClick={() => setOpen(false)} className="block">
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setOpen(false)}
              className="block "
            >
              All Products
            </NavLink>
            {user && (
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="block"
              >
                My orders
              </NavLink>
            )}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="block"
            >
              Contact
            </NavLink>

            {!user ? (
              <button
                onClick={() => {
                  setOpen(false);
                  setShowUserLogin(true);
                }}
                className="cursor-pointer px-6 py-2 mt-2 bg-teal-500 hover:bg-teal-600 transition text-white rounded-full text-sm"
              >
                Login
              </button>
            ) : (
              <button
                onClick={logout}
                className="cursor-pointer px-6 py-2 mt-2 bg-teal-500 hover:bg-teal-600 transition text-white rounded-full text-sm"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;