import React, { createContext, useContext, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyProducts } from '../assets/assets';
import toast from 'react-hot-toast'


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const currency =import.meta.VITE_CURRENCY;
  const [user, setUser] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products,setProducts] = useState(false);
  const [cartItems,setCartItems] = useState({})

  const fetchProducts = async ()=>{
    setProducts(dummyProducts)
  }
const addToCart = ()=>{
  let cartData=structuredClone(cartItems);

  if(cartdata[itemId]){
    cartData[ItemId]+=1;
  } else {
  cartData[itemId] = 1; 
}

const updatecartItem = (itemId ,quantity)=>{
  let cartData=structuredClone(cartItems);
  cartData[itemId] = quantity;
  setCartItems(cartdata)
  toast.success("Cart Updated")
}


toast.success("Added To cart ")
setCartItems(cartData);



  useEffect(()=> {
    fetchProducts()
  },[])
  
  const value = useMemo(() => ({ 
    user, 
    setUser, 
    isSeller, 
    setIsSeller ,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    addToCart
  }), [user, isSeller]);
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppContextProvider = AppProvider;