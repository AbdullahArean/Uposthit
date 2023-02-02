/* eslint-disable no-unused-vars */
import React from "react";
import { useState, CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";

function Spinner() {
  let [color, setColor] = useState("#1E212D");
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <PulseLoader
        color={color}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;