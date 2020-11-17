import React from "react";
import { Header } from "./components/Header";
import ChartTwo from "./components/WeightChart-hook";
import Form from "./components/Form";
import Charty from "./components/NewChart-testing";
import "./styles.css";
import {DataProvider} from "./DataProvider";


export default function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <ChartTwo />
        <Form />
        <Charty/>
      </DataProvider>
    </div>
  );
}
