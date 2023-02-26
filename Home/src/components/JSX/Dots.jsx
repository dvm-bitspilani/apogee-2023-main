import React, { useEffect, useState } from "react";

const Dots = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => setIndex((index + 1) % 8), 300);
  }, [index]);

  return (
    <div className="dots">
      {Array(8)
        .fill()
        .map((e, i) => (
          <div key={i} className={`${i == index ? "filledDot" : ""} dot`} />
        ))}
    </div>
  );
};

export default Dots;
