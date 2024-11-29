// src/components/Card.jsx
import React from "react";

const Card = ({ title, description, imageSrc, onPress }) => {
  return (
    <div style={styles.cardContainer} onClick={onPress}>
      <div style={styles.topSection}>
        <span style={styles.topText}>{title}</span>
      </div>
      <div style={styles.middleSection}>
        <div style={styles.imageContainer}>
          <img src={imageSrc} alt={title} style={styles.image} />
        </div>
        <div style={styles.bottomLine}></div>
        <div style={styles.bottomText}>{description}</div>
      </div>
    </div>
  );
};

export default Card;

// Styles
const styles = {
  cardContainer: {
    width: "49%", // Each card takes roughly 48% of the container width
    marginBottom: "3%",
    backgroundColor: "#fff",
    borderRadius: "15px",
    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
    height: "250px",
    display: "flex",
    flexDirection: "column",
  },
  topSection: {
    height: "16.666%",
    backgroundColor: "#f4f1d0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  topText: {
    fontWeight: "bold",
    textTransform: "lowercase",
  },
  middleSection: {
    flex: 1,
    backgroundColor: "#2e997f",
    position: "relative",
  },
  imageContainer: {
    position: "absolute",
    top: "0px",
    left: "10px",
    right: "10px",
    bottom: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "95%",
    objectFit: "contain",
  },
  bottomLine: {
    position: "absolute",
    bottom: "60px",
    left: 0,
    right: 0,
    height: "4px",
    backgroundColor: "#f4f1d0",
  },
  bottomText: {
    position: "absolute",
    bottom: "10px",
    left: "20px",
    right: "20px",
    fontSize: "14px",
    color: "#f4f1d0",
  },
};
