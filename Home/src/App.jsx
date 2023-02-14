import React, { createContext, useEffect, useRef, useState } from "react";
import "./App.css";
import BrainLabel from "./components/JSX/BrainLabel";
import Contact from "./components/JSX/Contact";
import Events from "./components/JSX/Events";
import Landing from "./components/JSX/Landing";
import Loader from "./components/JSX/Loader";
import ModalComp from "./components/JSX/ModalComp";
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
  }, [])

  const [labels, setLabels] = useState({
    event: false,
    contact: true,
  });

  const context = {
    modalOpen: modalOpen,
    updateModal: isOpen => setModalOpen(isOpen),

    displayModal: displayModal,
    setDisplayModal: setDisplayModal,

    labels: labels,
    setLabels: (label, isVisible) => {
      setLabels(currLabel => ({
        ...currLabel,
        [label]: isVisible,
      }));
    },
  };

  const [loaded, setLoaded] = useState(false);
  const [per, setPer] = useState(0);
  const [scroll, setScroll] = useState(false)

  const onLoad = () => {
    let time = window.performance.getEntries("navigation")[0].loadEventEnd + 2000;
    let a = per * time / 100;
    const int = setInterval(() => {
      a += 100
      setPer(Math.floor(a / time * 100))
      if (a / time * 100 >= 100) { clearInterval(int); setLoaded(true) }
    }, 100)
  }

  function changeScroll() {
    setScroll(prevScroll => !prevScroll)
  }

  useEffect(() => {
    onLoad();
    const app = document.querySelector('.App');
    if (!loaded) {
      app.style.maxHeight = '100vh';
      app.style.overflow = 'hidden';
    }
    else {
      app.style.minHeight = '100vh';
      app.style.overflowY = 'auto';
    }
  }, [loaded]);


  return (
    <div className="App">
      {!loaded ? <Loader percent={per} /> : <></>}
      <ModalContext.Provider value={context}>
        <Landing scroll={changeScroll} allowScroll={scroll} />
        {displayModal ? <ModalComp /> : <></>}
        {labels.event ? <BrainLabel modal={Modal.Event} /> : <></>}
        {labels.contact ? <BrainLabel modal={Modal.Contact} /> : <></>}
        {scroll &&
          <Contact />
        }
        {!matches &&
          <>
            <div
        className="heading"
        onClick={evt => {
          evt.stopPropagation();
        }}
      >
        EVENTS
      </div>
            <Events />
            <Contact />
          </>
        }
      </ModalContext.Provider>
    </div>
  );
}

export default App;
