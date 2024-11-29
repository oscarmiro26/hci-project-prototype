// src/components/InfoSection.jsx
import React from "react";

const InfoSection = ({ icon, title, number, numberColor }) => {
  return (
    <div style={styles.infoContainer}>
      <div style={styles.iconContainer}>{icon}</div>
      <h4 style={styles.title}>{title}</h4>
      <p style={{ ...styles.number, color: numberColor }}>{number}</p>
    </div>
  );
};

const styles = {
  infoContainer: {
    backgroundColor: "#dff7e2",
    borderRadius: "15px",
    width: "150px",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px",
  },
  iconContainer: {
    fontSize: "30px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "16px",
    color: "#000",
    margin: "5px 0",
  },
  number: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  },
};

export default InfoSection;
