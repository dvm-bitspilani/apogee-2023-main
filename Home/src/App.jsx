import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import About from "./components/JSX/About";
import BrainLabel from "./components/JSX/BrainLabel";
import Contact from "./components/JSX/Contact";
import Events from "./components/JSX/Events";
import Landing from "./components/JSX/Landing";
import Loader from "./components/JSX/Loader";
import ModalComp from "./components/JSX/ModalComp";
import Speakers from "./components/JSX/Speakers";
import Modal from "./enums/Modal";

export const ModalContext = createContext();

function App() {
  const [modalOpen, setModalOpen] = useState(Modal.None);
  const [displayModal, setDisplayModal] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 450px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 450px)")
      .addEventListener("change", e => setMatches(e.matches));
  }, []);

  const [labels, setLabels] = useState({
    event: false,
    contact: true,
  });
  const [is2D, set2D] = useState(false);

  const context = {
    modalOpen,
    updateModal: setModalOpen,

    displayModal,
    setDisplayModal,

    labels,
    setLabels: (label, isVisible) => {
      setLabels(currLabel => ({
        ...currLabel,
        [label]: isVisible,
      }));
    },
    is2D,
    set2D,
  };

  const [loaded, setLoaded] = useState(false);
  let [per, setPer] = useState(0);
  const [scroll, setScroll] = useState(false);

  function changeScroll(){
    setScroll(prevScroll => !prevScroll)
  }

  const onLoad = () => {
    let estTime = window.performance.getEntries("navigation")[0].loadEventEnd;
    let time = estTime + 2000;
    let a = (per * time) / 100;
    const int = setInterval(() => {
      a += 100;
      per = Math.floor((a / time) * 100);
      setPer(per);
      if (per >= 100) {
        clearInterval(int);
        setLoaded(true);
      }
    }, 100);
  };

  useEffect(() => {
    onLoad();
    const app = document.querySelector(".App");
    if (!loaded) {
      app.style.maxHeight = "100vh";
      app.style.overflow = "hidden";
    } else {
      app.style.minHeight = "100vh";
      app.style.overflow = "none";
    }
  }, []);

  return (
    <div className="App">
      {!loaded ? <Loader percent={per} /> : <></>}
      {/* <ModalContext.Provider value={context}>
        <Landing allowScroll={scroll} loaded={loaded} />
        {!is2D ? (
          <>
            {displayModal ? <ModalComp /> : <></>}
            {labels.event ? <BrainLabel modal={Modal.Event} /> : <></>}
            {labels.contact ? <BrainLabel modal={Modal.Contact} /> : <></>}
          </>
        ) : (
          <></>
        )}
      </ModalContext.Provider> */}
      <Speakers />
    </div>
  );
}

export default App;
