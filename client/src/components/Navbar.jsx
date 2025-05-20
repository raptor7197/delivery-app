// import React, { useState } from 'react';
import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {assets} from '../assets/assets.js'  
import { useAppContext } from '../context/AppContext.jsx'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const {user ,setUser ,setshowUserLogin,navigate} = useAppContext(false);
    const logout = async () => {
      setUser(null);
      navigate('/');
    }
   

    return (
        <div>
          <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink href="/">
                <img className="h-9" src={assets.logo} alt="logo" />
            </NavLink>

            {/* desktop  */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/">All Products</NavLink>
                <NavLink href="/">Contact</NavLink>

                {/* search box */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <div className="relative cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-teal-500 w-[18px] h-[18px] rounded-full">3</button>
                </div>

               { !user ? (<button onClick = {()=>setshowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-teal-500 hover:bg-teal-600 transition text-white rounded-full">
                    Login
                </button>) :
                 (
                  <div>


                  <img src={assets.profile_icon} alt="user icon" className="w-8 h-8 rounded-full cursor-pointer" />
                   <ul>
                    <li>My orders </li>
                   </ul>
                  </div>
                )
                
                
                }
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                <img src={assets.menu_icon} alt="menu" />
            </button>

            {/* mobile  */}
           { open &&( 
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-center gap-2 px-5 text-sm md:hidden`}>
                <NavLink to="/" onClick={()=>setOpen(false)} className="block">Home</NavLink>
                <NavLink to="/products" onClick={()=>setOpen(false)} className="block ">All Products</NavLink>
                {user &&
                <NavLink to="/contact" onClick={()=>setOpen(false)} className="block">My orders</NavLink>
                }
                <NavLink to="/contact" onClick={()=>setOpen(false)} className="block">Contact</NavLink>

                {!user ? (
                  <button onClick={()=>{setOpen(false);
                    setShowUserLogin(true);
                  }} className="cursor-pointer px-6 py-2 mt-2 bg-teal-500 hover:bg-teal-600 transition text-white rounded-full text-sm">
                    Login
                </button>

                ) :(
                  <button onClick= {logout}className="cursor-pointer px-6 py-2 mt-2 bg-teal-500 hover:bg-teal-600 transition text-white rounded-full text-sm">
                    Logout
                </button>
                )}
                
            </div>)}

        </nav>
        </div>
    )
}

export default Navbar