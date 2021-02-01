import React from "react";
import './App.css';
import Header from "./Header";
import Form from "./Form";

import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Form />
      </div>
    </div>
  );
}
