import React from "react";

function PrimaryBtn({ style, text, onClick }) {
  return (
    <button onClick={onClick} className={`bg-primary w-[25vw] h-[10vh] col-center ${style}`}>
      <p className="text-white">{text}</p>
    </button>
  );
}

export default PrimaryBtn;
