import React, { useState, useEffect, useMemo, useRef } from "react";

const Traffic = () => {
  const states = useMemo(
    () => [
      {
        color: "red",
        duration: 5000,
        next: "yellow",
      },
      { color: "yellow", duration: 3000, next: "green" },
      { color: "green", duration: 5000, next: "red" },
    ],
    []
  );
  const timerRef = useRef(null);
  const [currentState, setCurrentState] = useState(states[0]);

  const handleStart = () => {
    clearTimeout(timerRef.current);
    setCurrentState(states[0]);
  };
  const handlePause = () => {
    clearTimeout(timerRef.current);
  };
  const handleReset = () => {
    clearTimeout(timerRef.current);
    setCurrentState(states[0]);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCurrentState(
        states.find((state) => state.color === currentState.next)
      );
    }, currentState.duration);

    return () => clearTimeout(timerRef.current);
  }, [states, currentState]);
  return (
    <div className="trafficContainer">
      <span>Traffic Signal Component</span>
      <div className="trafficSignal">
        {states.map((state) => {
          return (
            <div
              className="signalState"
              style={{
                backgroundColor:
                  state.color === currentState.color ? state.color : "",
              }}
            ></div>
          );
        })}
      </div>
      <div className="controls">
        Controls:
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Traffic;
