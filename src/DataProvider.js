// import data to here and share as global context with the app
import React, { createContext } from "react";

export const GlobalContext = React.createContext();

export const DataProvider = ({ children }) => {


    
  return (
      <GlobalContext.Provider value={'bearBear'}>
      {children}
      </GlobalContext.Provider>
  );
}