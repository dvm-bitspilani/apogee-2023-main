import React, { createContext, useEffect, useRef, useState } from "react";
import "./App.css";
import BrainLabel from "./components/JSX/BrainLabel";
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

  return (
    <div className="App">
      <ModalContext.Provider value={context}>
        <Landing />

        {displayModal ? <ModalComp /> : <></>}
        {labels.event ? <BrainLabel modal={Modal.Event} /> : <></>}
        {labels.contact ? <BrainLabel modal={Modal.Contact} /> : <></>}
      </ModalContext.Provider>

    </div>
  );
}

export default App;
