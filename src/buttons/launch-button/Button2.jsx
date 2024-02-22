import React from 'react';
import { useState } from "react";
import rocket from "./rocket.svg";
import smoke from "./smoke.svg";
import "./styles.css";

const Button2 = () => {
    const [isLaunching, setIsLaunching] = useState(false);

    const handleClick = () => {
      setIsLaunching(true);
      setTimeout(() => {
        setIsLaunching(false);
      }, 3000);
    };
  return (
    <div>
      <button onClick={handleClick} className={isLaunching ? "launching" : ""}>
      <img className="rocket" src={rocket} />
      <span>Launch</span>
      <img className="smoke" src={smoke} />
    </button>
    </div>
  )
}

export default Button2
