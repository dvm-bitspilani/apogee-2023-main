import React, { useEffect, useState } from "react";
import styles from "../CSS/Events.module.css";
import sq1 from "../../assets/events/squareFilled.svg";
import sq2 from "../../assets/events/squareUnfilled.svg";

const Squares = () => {
  const [filled, setFilled] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const arr = [];
      for (let i = 0; i < 8; i++) {
        arr.push(Math.random() > 0.5);
      }

      setFilled(arr);
    }, 1000);
  }, [filled]);

  return (
    <div className={styles.squares}>
      {Array(8)
        .fill()
        .map((e, i) => (
          <img src={filled[i] ? sq1 : sq2} />
        ))}
    </div>
  );
};

export default Squares;
