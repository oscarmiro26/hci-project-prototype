// src/components/Header.jsx
import React from "react";
import styles from "./Header.module.css";
import { FaBell } from "react-icons/fa";

const Header = ({ children, bannerHeight }) => {
  const handleNotificationClick = () => {
    console.log("Notifications opened");
  };

  return (
    <header
      className={styles.headerContainer}
      style={{ height: bannerHeight ? `${bannerHeight}px` : "200px" }}
    >
      <div className={styles.headerContent}>
        {/* Custom Header Content */}
        {children}

        {/* Notification Button */}
        <button
          className={styles.notificationButton}
          onClick={handleNotificationClick}
          aria-label="Notifications"
        >
          <FaBell className={styles.notificationIcon} />
        </button>
      </div>
    </header>
  );
};

export default Header;
