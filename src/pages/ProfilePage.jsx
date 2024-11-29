// src/pages/ProfilePage.jsx
import React from "react";
import BottomNav from "../components/BottomNav";
import userProfileData from "../data/userProfile.json";
import {
  FaUserEdit,
  FaLock,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaEllipsisH,
  FaBell,
} from "react-icons/fa";
import styles from "./ProfilePage.module.css";

const ProfilePage = ({ setCurrentPage }) => {
  const { name, id, profilePic } = userProfileData;

  const handleButtonClick = (label) => {
    console.log(`${label} button clicked`);
  };

  const handleNotificationClick = () => {
    console.log("Notifications opened");
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.headerContainer}>
        {/* Top Row */}
        <div className={styles.topRow}>
          {/* Title */}
          <h1 className={styles.headerTitle}>Profile</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Profile Picture and User Info */}
        <div className={styles.profileContainer}>
          <div className={styles.profileImageContainer}>
            <img src={profilePic} alt="Profile" className={styles.profileImage} />
          </div>
          <div className={styles.userInfo}>
            <h2 className={styles.userName}>{name}</h2>
            <p className={styles.userID}>ID: {id}</p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className={styles.buttonsContainer}>
          {profileButtons.map((button) => (
            <button
              key={button.label}
              className={styles.buttonRow}
              onClick={() => handleButtonClick(button.label)}
            >
              <div className={styles.iconContainer}>
                {button.icon}
              </div>
              <span className={styles.buttonLabel}>{button.label}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

const profileButtons = [
  { label: "Edit Profile", icon: <FaUserEdit /> },
  { label: "Security", icon: <FaLock /> },
  { label: "Settings", icon: <FaCog /> },
  { label: "Help", icon: <FaQuestionCircle /> },
  { label: "Logout", icon: <FaSignOutAlt /> },
  { label: "Other", icon: <FaEllipsisH /> },
];

export default ProfilePage;
