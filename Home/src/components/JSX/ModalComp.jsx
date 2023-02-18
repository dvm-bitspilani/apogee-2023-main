import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../App";
import "../CSS/Modal.css";
import About from "./About";
import Contact from "./Contact";
import Events from "./Events";
import Speakers from "./Speakers";

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

      case "speaker":
        setChild(<Speakers />);
        break;

      case "about":
        setChild(<About />);
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
      style={{
        transformOrigin: `${mContext.modalOpen.loc[0]}px ${mContext.modalOpen.loc[1]}px`,
      }}
    >
      {child}
    </div>
  );
}
