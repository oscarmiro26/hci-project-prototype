// src/components/AnxietyLocationGrid.jsx
import React from "react";
import ProgressRing from "./ProgressRing"; // Assuming you have a ProgressRing component

const AnxietyLocationGrid = () => {
  const locations = [
    { name: "Home", percentage: 40 },
    { name: "Work", percentage: 60 },
    { name: "Gym", percentage: 20 },
    // ... (more locations)
  ];

  return (
    <div style={styles.gridContainer}>
      {locations.map((location) => (
        <div key={location.name} style={styles.gridItem}>
          <ProgressRing
            radius={50}
            stroke={10}
            progress={location.percentage}
          />
          <p style={styles.percentageText}>{location.percentage}%</p>
          <p style={styles.locationName}>{location.name}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridItem: {
    width: "100px",
    height: "130px",
    backgroundColor: "#dff7e2",
    borderRadius: "50px",
    marginBottom: "20px",
    position: "relative",
    textAlign: "center",
  },
  percentageText: {
    position: "absolute",
    top: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "18px",
    color: "#f1fff3",
  },
  locationName: {
    marginTop: "90px",
    fontSize: "14px",
    color: "#000",
  },
};

export default AnxietyLocationGrid;
