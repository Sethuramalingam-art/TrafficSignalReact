import React, { useState, useEffect } from "react";

const Traffic = ({ states }) => {
  const [currentColor, setCurrentColor] = useState("yellow");
  useEffect(() => {
    const { duration, next } = states[currentColor];
    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => clearTimeout(timerId);
  }, [currentColor]);

  return (
    <div className="wrapper">
      {Object.keys(states).map((color, key) => {
        return (
          <div
            className="light"
            style={{
              backgroundColor:
                color === currentColor && states[color].backgroundColor,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Traffic;
