// src/components/TimePeriodSelector.jsx
import React from "react";

const TimePeriodSelector = ({ selectedPeriod, onSelect }) => {
  const periods = ["Daily", "Weekly", "Monthly", "Yearly"];

  return (
    <div style={styles.selectorContainer}>
      {periods.map((period) => (
        <button
          key={period}
          onClick={() => onSelect(period)}
          style={{
            ...styles.periodButton,
            backgroundColor: selectedPeriod === period ? "#b2c6b5" : "transparent",
          }}
        >
          {period}
        </button>
      ))}
    </div>
  );
};

const styles = {
  selectorContainer: {
    backgroundColor: "#dff7e2",
    borderRadius: "10px",
    display: "flex",
    width: "85%",
    margin: "10px auto",
    overflow: "hidden",
  },
  periodButton: {
    flex: 1,
    padding: "10px 0",
    border: "none",
    color: "#000",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "transparent",
  },
};

export default TimePeriodSelector;
