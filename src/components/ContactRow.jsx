// src/components/ContactRow.jsx
import React from "react";
import styles from "./ContactRow.module.css";

const ContactRow = ({ contact }) => {
  return (
    <div className={styles.contactRow}>
      <img
        src={contact.profilePic}
        alt={contact.name}
        className={styles.contactImage}
      />
      <span className={styles.contactName}>{contact.name}</span>
      <span
        className={
          contact.status === "Available"
            ? styles.statusAvailable
            : styles.statusUnavailable
        }
      >
        {contact.status}
      </span>
    </div>
  );
};

export default ContactRow;
