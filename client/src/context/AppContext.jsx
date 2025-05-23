import React, { createContext, useContext, useState, useMemo } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  
  const value = useMemo(() => ({ 
    user, 
    setUser, 
    isSeller, 
    setIsSeller ,
    showUserLogin,
    setShowUserLogin
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