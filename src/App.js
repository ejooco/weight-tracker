import React from "react";
import { Header } from "./components/Header";
import ChartOne from "./components/WeightChart";
import Form from "./components/Form";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <ChartOne />
      <Form />
    </div>
  );
}
