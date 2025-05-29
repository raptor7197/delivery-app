import React, { createContext, useContext, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyProducts } from '../assets/assets';


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products,setProducts] = useState(false);

  const fetchProducts = async ()=>{
    setProducts(dummyProducts)
  }
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
    products
  }), [user, isSeller]);
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppContextProvider = AppProvider;