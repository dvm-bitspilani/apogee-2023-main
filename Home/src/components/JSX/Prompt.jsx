import React from "react";
import "../CSS/Prompt.css";

function Prompt() {
  return (
    <div className="prompt">
      <svg
        width={60}
        height={20}
        fill="none"
        viewBox="0 0 124 57"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 3.65625L62.8657 29.1936L120 3.65625M4 29.1936L62.8657 52.9995L120 29.1936"
          stroke="#4DAFFF"
          strokeWidth={8}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default Prompt;
