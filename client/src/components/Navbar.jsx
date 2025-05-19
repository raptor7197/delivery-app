import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); 
  return (
    // <nav className="bg-white shadow-sm">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between h-16">
    //       {/* Logo and Brand */}
    //       <div className="flex items-center">
    //         <a href="/" className="flex-shrink-0 flex items-center">
    //           <span className="text-2xl font-bold text-indigo-600">ShopEase</span>
    //         </a>
    //       </div>
          
    //       {/* Navigation Links - Desktop */}
    //       <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
    //         <a href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">
    //           Home
    //         </a>
    //         <a href="/shop" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">
    //           Shop
    //         </a>
    //         <a href="/categories" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">
    //           Categories
    //         </a>
    //         <a href="/deals" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">
    //           Deals
    //         </a>
    //       </div>
          
    //       {/* Search, Cart and Account - Desktop */}
    //       <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
    //         {/* Search */}
    //         <div className="relative">
    //           <input
    //             type="text"
    //             placeholder="Search products..."
    //             className="w-full sm:w-64 px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //           />
    //           <button className="absolute right-0 top-0 mr-3 mt-2">
    //             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    //             </svg>
    //           </button>
    //         </div>
            
    //         {/* Cart */}
    //         <a href="/cart" className="relative p-1 rounded-full text-gray-600 hover:text-indigo-600 focus:outline-none">
    //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    //           </svg>
    //           {cartCount > 0 && (
    //             <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
    //               {cartCount}
    //             </span>
    //           )}
    //         </a>
            
    //         {/* Account */}
    //         <a href="/account" className="p-1 rounded-full text-gray-600 hover:text-indigo-600 focus:outline-none">
    //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    //           </svg>
    //         </a>
    //       </div>
          
    //       {/* Mobile menu button */}
    //       <div className="flex items-center sm:hidden">
    //         <button
    //           onClick={() => setIsOpen(!isOpen)}
    //           className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none"
    //           aria-expanded="false"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           {/* Icon when menu is closed */}
    //           <svg
    //             className={`${isOpen ? 'hidden' : 'block'} h-5 w-5`}
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           </svg>
    //           {/* Icon when menu is open */}
    //           <svg
    //             className={`${isOpen ? 'block' : 'hidden'} h-5 w-5`}
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         </button>
            
    //         {/* Mobile Cart Icon */}
    //         <a href="/cart" className="ml-2 relative p-1 rounded-full text-gray-600 hover:text-indigo-600 focus:outline-none">
    //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    //           </svg>
    //           {cartCount > 0 && (
    //             <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
    //               {cartCount}
    //             </span>
    //           )}
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Mobile menu, show/hide based on menu state */}
    //   <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
    //     <div className="px-2 pt-2 pb-3 space-y-1">
    //       <a
    //         href="/"
    //         className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
    //       >
    //         Home
    //       </a>
    //       <a
    //         href="/shop"
    //         className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
    //       >
    //         Shop
    //       </a>
    //       <a
    //         href="/categories"
    //         className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
    //       >
    //         Categories
    //       </a>
    //       <a
    //         href="/deals"
    //         className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
    //       >
    //         Deals
    //       </a>
    //       <a
    //         href="/account"
    //         className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
    //       >
    //         My Account
    //       </a>
    //       {/* Mobile Search */}
    //       <div className="relative mt-3 px-3">
    //         <input
    //           type="text"
    //           placeholder="Search products..."
    //           className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //         />
    //         <button className="absolute right-0 top-0 mr-4 mt-2">
    //           <svg xmlns="http://www.w3.org/2000/svg" className="h-1 w-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <div>
      <div text="text-2xl font-bold text-indigo-600 bg-yellow-200">
        this is the text 
        
      </div>
    </div>
  );
};

export default Navbar;