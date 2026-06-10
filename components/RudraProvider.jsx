'use client';
import React, { createContext, useContext, useState } from 'react';

const RudraContext = createContext();

export function RudraProvider({ children }) {
  const [globalData, setGlobalData] = useState({});
  return (
    <RudraContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </RudraContext.Provider>
  );
}

export const useRudra = () => useContext(RudraContext);