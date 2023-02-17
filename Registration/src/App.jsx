import React, { useState, useEffect } from "react";
import "./App.css";
import BackBtn from "./components/JSX/BackBtn";
import Form from "./components/JSX/Form.jsx";
import Rings from "./components/JSX/Rings.jsx";

function App() {
  return (
    <div className="registration-app">
      <Rings />
      <div className="background">
        <div className="header" style={{ display: "flex" }}>
          <div className="back">
            <BackBtn />
          </div>
          <div className="heading">REGISTRATION</div>
          <div className="back"></div>
        </div>

        <div className="form-container">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
