import React, { useContext, useEffect } from "react";
import { ModalContext } from "../../App";
import Modal from "../../enums/Modal";
import "../CSS/Modal.css";
import Contact from "./Contact";
import Events from "./Events";

export default function ModalComp() {
  const modal = useContext(ModalContext);
  const modalValue = modal.modalOpen.getValue().toLowerCase();
  let child;
  if (modalValue === "contact") {
    child = <Contact />;
  } else if (modalValue === "event") {
    child = <Events />;
  }

  useEffect(() => {
    document.addEventListener("keyup", evt => {
      evt.preventDefault();
      if (evt.key === "Escape") {
        modal.setDisplayModal(false);
      }
    });
  }, []);

  return (
    <div
      key={Math.random()}
      className="modalParent"
      onClick={() => modal.setDisplayModal(false)}
    >
      {child}
    </div>
  );
}
