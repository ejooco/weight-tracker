import React, { useContext } from "react";
import { GlobalContext } from '../App';

export const Header = () => {
  const dog = useContext(GlobalContext)
  return <h2>Weight Tracker for {dog}</h2>;
};
