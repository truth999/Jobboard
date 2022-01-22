import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);

  const toogleConnected = () => {
    setIsConnected(isConnected ? false : true);
  };

  return (
    <UserContext.Provider value={{ isConnected, toogleConnected }}>{children}</UserContext.Provider>
  );
};
