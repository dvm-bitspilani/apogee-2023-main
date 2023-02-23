import React, { useState, useEffect } from "react";
import "./App.css";
import BackBtn from "./components/JSX/BackBtn";
import Form from "./components/JSX/Form.jsx";
import Rings from "./components/JSX/Rings.jsx";
import Loader from "./components/JSX/Loader";

function App() {
  const [per, setPer] = useState(0),
    [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    const ET =
      window.performance.getEntries("navigation")[0].loadEventEnd + 2000;
    let a = (per * ET) / 100;

    const int = setInterval(() => {
      a += 100;
      const temp = Math.floor((a / ET) * 100);

      setPer(temp);
      if (temp >= 100) {
        clearInterval(int);
        setLoaded(true);
      }
    }, 100);
  };

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    if (!loaded) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "static";
    }
  }, [loaded]);

  return (
    <div className="registration-app">
      {!loaded ? <Loader percent={per} /> : <></>}
      <div className="registration-wrapper">
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
    </div>
  );
}

export default App;
