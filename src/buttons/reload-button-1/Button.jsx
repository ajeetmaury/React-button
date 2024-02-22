import React from 'react';
import { useState } from "react";
import "./styles.css";
import icon from "./reload.svg";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Button = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
      setIsLoading(true);
      await delay(3000);
      setIsLoading(false);
    };

  return (
    <div>
       <button
      disabled={isLoading}
      onClick={handleClick}
      className={`button ${isLoading ? "loading" : ""}`}
    >
      <img src={icon} />
      <span>{isLoading ? "Reloading" : "Reload App"}</span>
    </button>
    </div>
  )
}

export default Button
