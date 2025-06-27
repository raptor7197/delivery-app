import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

const {setIsSeller} = useAppContext();

const SellerLogin = () => {

   
    const sidebarLinks = [
        { name: "Dashboard", path: "/", icon: assets.add_icon },
        { name: "Product List ", path: "/seller/product-list", icon: product_list_icon },
        { name: "Orders", path: "/seller/orders", icon: chaticon },
    ];

    const logout = async ()
=>{
    setIsSeller(false);
}
    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white ">
                <Link to="/">
                    <img src={assets.logo} alt="logo" className="cursor-pointer w-34 md:w-38" />
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
            <div className='md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>

            
            <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                {sidebarLinks.map((item, index) => (
                    <NavLink to={item.path} key={item.name} end = {item.path==="/seller"}
                    className={({isActive})}
                        className={`flex items-center py-3 px-4 gap-3 
                            ${isActive ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-primary text-primary"
                                : "hover:bg-gray-100/90 border-white 
                            }`
                        }
                    >
                      <img src={item.icon} alt="" />  
                        <p className="md:block hidden text-center">{item.name}</p>
                    </NavLink>
                ))}
                </div>
            </div>
        </>
    );
};

export default SellerLogin;