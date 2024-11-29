// src/components/ToggleSwitch.jsx
import React from "react";

const ToggleSwitch = ({ isPublic, onToggle }) => {
  const switchContainerStyle = {
    ...styles.switchContainer,
    backgroundColor: isPublic ? "#6db6fe" : "#052224",
  };

  const switchBallStyle = {
    ...styles.switchBall,
    left: isPublic ? "2px" : "62px",
  };

  const switchTextStyle = {
    ...styles.switchText,
    marginLeft: isPublic ? "32px" : "10px",
  };

  return (
    <div style={switchContainerStyle} onClick={onToggle}>
      <div style={switchBallStyle}></div>
      <div style={switchTextStyle}>{isPublic ? "PUBLIC" : "PRIVATE"}</div>
    </div>
  );
};

export default ToggleSwitch;

const styles = {
  switchContainer: {
    width: "90px",
    height: "30px",
    borderRadius: "15px",
    position: "relative",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "background-color 0.2s",
  },
  switchBall: {
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    position: "absolute",
    transition: "left 0.2s",
  },
  switchText: {
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: "bold",
    position: "absolute",
    transition: "margin-left 0.2s",
  },
};
