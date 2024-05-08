import React, { useState, useEffect } from "react";

function Detail({ data }) {
  // Check if data exists and ensure it has at least one element
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  // Destructure the properties from data[0]
  const { count, humidity, temp, dust } = data[0];

  // State to hold the quality state index
  const [state, setState] = useState(() => {
    let initialState = 0;

    // Determine initial state based on dust value
    if (dust <= 25) {
      initialState = 0;
    } else if (dust <= 37) {
      initialState = 1;
    } else if (dust <= 50) {
      initialState = 2;
    } else if (dust <= 90) {
      initialState = 3;
    } else {
      initialState = 4;
    }

    return initialState;
  });

  // Update state based on the dust value when component mounts or data changes
  useEffect(() => {
    let newState = state; // Keep the current state value

    // Determine the new state based on the dust value
    if (dust <= 25) {
      newState = 0;
    } else if (dust <= 37) {
      newState = 1;
    } else if (dust <= 50) {
      newState = 2;
    } else if (dust <= 90) {
      newState = 3;
    } else {
      newState = 4;
    }

    // Update state only if the new state is different from the current state
    if (newState !== state) {
      setState(newState);
    }
  }, [dust]); // Trigger effect when 'dust' value changes

  const quality = ["ดีมาก", "ดี", "ปานกลาง", "เริ่มมีผลกระทบ", "มีผลกระทบ"];

  return (
    <div>
      <h2 className="text-lg font-bold">Data Details component</h2>
      <p>Count: {count}</p>
      <p>Humidity: {humidity}</p>
      <p>Temperature: {temp}</p>
      <p>PM 2.5: {dust}</p>
      <p className="text-red-500">State: {quality[state]}</p>{" "}
      {/* Use 'state' directly as index */}
    </div>
  );
}

export default Detail;
