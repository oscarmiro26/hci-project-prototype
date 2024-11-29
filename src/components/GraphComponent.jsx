// src/components/GraphComponent.jsx
import React from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";

const GraphComponent = () => {
  return (
    <div style={styles.graphContainer}>
      <h3 style={styles.graphHeader}>Anxiety Levels</h3>
      <div style={styles.graphButtons}>
        <button style={styles.iconButton}>
          <FaSearch style={styles.icon} />
        </button>
        <button style={styles.iconButton}>
          <FaCalendarAlt style={styles.icon} />
        </button>
      </div>
      {/* Placeholder for the actual graph */}
      <div style={styles.graphPlaceholder}>[Graph Here]</div>
    </div>
  );
};

const styles = {
  graphContainer: {
    backgroundColor: "#dff7e2",
    borderRadius: "15px",
    width: "350px",
    height: "250px",
    margin: "20px auto",
    position: "relative",
    padding: "15px",
  },
  graphHeader: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#000",
  },
  graphButtons: {
    position: "absolute",
    top: "15px",
    right: "15px",
    display: "flex",
  },
  iconButton: {
    backgroundColor: "#00d09e",
    border: "none",
    borderRadius: "8px",
    width: "30px",
    height: "30px",
    marginLeft: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  icon: {
    color: "#fff",
    fontSize: "16px",
  },
  graphPlaceholder: {
    marginTop: "50px",
    textAlign: "center",
    color: "#666",
  },
};

export default GraphComponent;
