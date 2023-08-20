import React, { useState, useEffect } from "react";

const Button = ({ children }) => {
  const [color, setColor] = useState("yellow");

  useEffect(() => {
    const onMouseEnter = () => {
      const gradient = `linear-gradient(to bottom right, yellow, black)`;
      setColor(gradient);
    };

    const onMouseLeave = () => {
      setColor("yellow");
    };

    document.querySelector(".button").addEventListener("mouseenter", onMouseEnter);
    document.querySelector(".button").addEventListener("mouseleave", onMouseLeave);
  }, []);

  return (
    <button
      className="button"
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default Button;