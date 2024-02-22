import { useState } from "react"
import React from 'react';
import "./styles.css";
import iconSettings from "./settings.svg";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Button = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
      setIsLoading(true);
      await delay(3500);
      setIsLoading(false);
    };
  return (
    <div>
    <button
      onClick={handleClick}
      className={`button ${isLoading ? "loading" : ""}`}
    >
      <img src={iconSettings} />
      <span>{isLoading ? "Deploying" : "Deploy Site"}</span>
    </button>
    </div>
  )
}

export default Button
