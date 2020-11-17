import React, { useContext } from "react";
import { GlobalContext } from "../DataProvider";

export const Header = () => {
  const context = useContext(GlobalContext);
  return <h2>Weight Tracker {context}</h2>;
};
