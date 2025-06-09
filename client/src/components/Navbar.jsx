import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { useAppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, setShowUserLogin, navigate, setSearchQuery, searchQuery } = useAppContext();
  
  const logout = async () => {
    setUser(null);
    navigate("/");
  };
  
  useEffect(() => {
    console.log("Search query changed:", searchQuery);
    if (searchQuery && searchQuery.length > 0) {
      console.log("Navigating to products page");
      navigate("/products");
    }
  }, [searchQuery, navigate]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    console.log("Search input changed:", value);
    setSearchQuery(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery && searchQuery.trim().length > 0) {
      console.log("Search submitted:", searchQuery);
      navigate("/products");
    }
  };

  return (
    <div>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img className="h-9" src={assets.logo} alt="logo" />
        </NavLink>

        <div className="hidden sm:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">All Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <form 
            onSubmit={handleSearchSubmit}
            className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full"
          >
            <input 
              onChange={handleSearchChange}
              value={searchQuery || ""} 
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <button type="submit" className="cursor-pointer">
              <img src={assets.search_icon} alt="search" />
            </button>
          </form>

          <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
            <img src={assets.cart_icon} alt="cart" />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-teal-500 w-[18px] h-[18px] rounded-full">
              69
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
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="user icon"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-300 rounded-md text-sm z-40 w-30 p-4">
                <li
                  onClick={() => navigate("/my-orders")}
                  className="p-1.5 pl-2 hover:bg-primary/10 cursor-pointer"
                >
                  My orders
                </li>
                <li
                  onClick={logout}
                  className="p-1.5 pl-2 hover:bg-primary/10 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="sm:hidden"
        >
          <img src={assets.menu_icon} alt="menu" />
        </button>

        {open && (
          <div className="absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-center gap-2 px-5 text-sm md:hidden">
            <NavLink to="/" onClick={() => setOpen(false)} className="block">
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setOpen(false)}
              className="block"
            >
              All Products
            </NavLink>
            {user && (
              <NavLink
                to="/my-orders"
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

            <form 
              onSubmit={handleSearchSubmit}
              className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full mt-2 w-full max-w-xs"
            >
              <input 
                onChange={handleSearchChange}
                value={searchQuery || ""}
                className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                type="text"
                placeholder="Search products"
              />
              <button type="submit" className="cursor-pointer">
                <img src={assets.search_icon} alt="search" />
              </button>
            </form>

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