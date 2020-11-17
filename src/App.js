import React from "react";
import { Header } from "./components/Header";
import ChartTwo from "./components/WeightChart-hook";
import Form from "./components/Form";
import Charty from "./components/NewChart-testing";
import "./styles.css";

export const GlobalContext = React.createContext();

export default function App() {
  return (
    <div className="App">
      <GlobalContext.Provider value={'bearBear'}>
        <Header />
        <ChartTwo />
        <Form />
        <Charty/>
      </GlobalContext.Provider>
    </div>
  );
}
