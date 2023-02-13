import React, { createContext, useEffect, useRef, useState } from "react";
import "./App.css";
import BrainLabel from "./components/JSX/BrainLabel";
import Events from "./components/JSX/Events";
import Landing from "./components/JSX/Landing";
import Loader from "./components/JSX/Loader";
import ModalComp from "./components/JSX/ModalComp";
import Modal from "./enums/Modal";

export const ModalContext = createContext();

function App() {
  const [modalOpen, setModalOpen] = useState(Modal.None);
  const [displayModal, setDisplayModal] = useState(false);
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

  const onLoad = () => {
    let time = window.performance.getEntries("navigation")[0].loadEventEnd+1000;
    let a = per*time/100;
    const int = setInterval(() => {
      a+=100
      setPer(Math.floor(a/time*100))
      if(a/time*100 >= 100) {clearInterval(int); setLoaded(true)}
    }, 100)
  }
  // let time=0,a=per*time/100;
  // const onLoad = () => {
  //   var width = 100, // width of a progress bar in percentage
  //   perfData = window.performance.getEntriesByType("resource"); // The PerformanceTiming interface
  //   let end = 0;
  //   for(let i=0; i<perfData.length; i++) {
  //     end = Math.max(end, perfData[i].responseEnd)
  //   }
  //   let EstimatedTime = end, // Calculated Estimated Time of Page Load which returns negative value.
  //   time = EstimatedTime; //Converting EstimatedTime from miliseconds to seconds.\
  //   const int = setInterval(() => {
  //     a+=100
  //     setPer(Math.floor(a/time*100))
  //     console.log(perfData);
  //     console.log(EstimatedTime)
  //     if(a/time*100 > 100) {clearInterval(int); setLoaded(true)}
  //   }, 100)
  // }

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="App">
      {!loaded ? <Loader percent={per} /> : <></> }
      <ModalContext.Provider value={context}>
        <Landing />
        {displayModal ? <ModalComp /> : <></>}
        {labels.event ? <BrainLabel modal={Modal.Event} /> : <></>}
        {labels.contact ? <BrainLabel modal={Modal.Contact} /> : <></>}
      </ModalContext.Provider>
      {/* <Loader /> */}
    </div>
  );
}

export default App;
