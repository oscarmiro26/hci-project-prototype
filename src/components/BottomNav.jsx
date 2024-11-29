// src/components/BottomNav.jsx
import React from "react";
import styles from "./BottomNav.module.css";
import { FaHome, FaHistory, FaShieldAlt, FaUser } from "react-icons/fa";

const BottomNav = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: "HomePage", icon: <FaHome />, label: "Home" },
    { id: "HistoryPage", icon: <FaHistory />, label: "History" },
    { id: "SafetyNetPage", icon: <FaShieldAlt />, label: "Safety Net" },
    { id: "ProfilePage", icon: <FaUser />, label: "Profile" },
  ];

  return (
    <nav className={styles.navContainer} aria-label="Bottom Navigation">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setCurrentPage(item.id)}
          className={`${styles.navButton} ${
            currentPage === item.id ? styles.active : styles.inactive
          }`}
          aria-label={item.label}
        >
          <span className={styles.icon}>{item.icon}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
