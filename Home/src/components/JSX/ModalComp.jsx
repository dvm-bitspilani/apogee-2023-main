import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../App";
import "../CSS/Modal.css";
import Contact from "./Contact";
import Events from "./Events";

export default function ModalComp() {
  const mContext = useContext(ModalContext);
  const modalValue = mContext.modalOpen.getValue().toLowerCase();

  const [closing, setClosing] = useState(false),
    [child, setChild] = useState(null);

  function close() {
    setClosing(true);
    setTimeout(() => mContext.setDisplayModal(false), 500);
  }

  useEffect(() => {
    document.addEventListener("keyup", evt => {
      evt.preventDefault();
      evt.key === "Escape" && close();
    });

    switch (modalValue) {
      case "contact":
        setChild(<Contact />);
        break;

      case "event":
        setChild(<Events />);
        break;

      default:
        break;
    }
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
