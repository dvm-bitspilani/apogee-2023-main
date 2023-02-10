import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../App";
import Modal from "../../enums/Modal";
import "../CSS/Modal.css";
import Contact from "./Contact";
import Events from "./Events";

export default function ModalComp() {
  const modal = useContext(ModalContext);
  const modalValue = modal.modalOpen.getValue().toLowerCase();
  const [closing, setClose] = useState(false);
  let child;

  function close() {
    setClose(true);
    setTimeout(() => {
      modal.setDisplayModal(false);
    }, 500);
  }

  if (modalValue === "contact") {
    child = <Contact />;
  } else if (modalValue === "event") {
    child = <Events />;
  }

  useEffect(() => {
    document.addEventListener("keyup", evt => {
      evt.preventDefault();
      if (evt.key === "Escape") {
        close();
      }
    });
  }, []);

  return (
    <div
      key={Math.random()}
      className={`modalParent ${closing ? "close" : ""}`}
      onClick={close}
    >
      {child}
    </div>
  );
}
