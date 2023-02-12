import React, { createContext, useEffect, useRef, useState } from "react";
import "./App.css";
import BrainLabel from "./components/JSX/BrainLabel";
import Events from "./components/JSX/Events";
import Landing from "./components/JSX/Landing";
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

  let time=0,a=per*time/100;
  const onLoad = () => {
    var width = 100, // width of a progress bar in percentage
    perfData = window.performance.timing, // The PerformanceTiming interface
    EstimatedTime = Math.abs(perfData.loadEventEnd - perfData.navigationStart), // Calculated Estimated Time of Page Load which returns negative value.
    time = parseInt((EstimatedTime/1000)%60); //Converting EstimatedTime from miliseconds to seconds.\
    const int = setInterval(() => {
      a+=1
      setPer(Math.floor(a/time*100))
      console.log(perfData);
      console.log(per)
      if(a/time*100 > 100) {clearInterval(int); setLoaded(true)}
    }, 100)
  }

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="App">
      {!loaded ? (<div style={{width: '100vw', height: '100vh'}}>{`Loading... ${per}%`}</div>) :
      (<ModalContext.Provider value={context}>
        <Landing />
        {displayModal ? <ModalComp /> : <></>}
        {labels.event ? <BrainLabel modal={Modal.Event} /> : <></>}
        {labels.contact ? <BrainLabel modal={Modal.Contact} /> : <></>}
      </ModalContext.Provider>)
}

    </div>
  );
}

export default App;
