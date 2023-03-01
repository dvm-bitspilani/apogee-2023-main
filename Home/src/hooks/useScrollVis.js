import { useContext, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { ModalContext } from "../App.jsx";

function between(a, b, num) {
  if (num >= a && num < b) {
    return true;
  }
  return false;
}

export default function useScrollVis(idx, pages, scrollDir) {
  const modal = useContext(ModalContext);
  const [visClass, setVisClass] = useState("open");
  const data = useScroll();
  const frame = modal === undefined || modal?.is2D ? useFrame : () => {};
  const OFFSET_TR = 1;
  const OFFSET = 0.1;
  frame(() => {
    const off = data.offset;
    setVisClass(
      between(idx / pages, (idx + OFFSET_TR) / pages, off)
        ? "open"
        : between((idx - OFFSET) / pages, idx / pages, off) && scrollDir === 1
        ? "close"
        : between(
            (idx + OFFSET_TR) / pages,
            (idx + OFFSET_TR + OFFSET) / pages,
            off
          ) && scrollDir === -1
        ? "close"
        : /* : data.visible(
           *     (idx + OFFSET_TR - OFFSET) / pages,
           *     (idx + OFFSET_TR) / pages
           *   )
           * ? "closing" */
          "closed"
    );
    if (data.visible(4.5 / 5, 1) && idx === 3.9) {
      setVisClass("open");
    }
  });

  return visClass;
}
