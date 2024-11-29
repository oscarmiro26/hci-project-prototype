// src/components/AddNewContact.jsx
import React from "react";
import styles from "./AddNewContact.module.css";
import { FaPlus } from "react-icons/fa";

const AddNewContact = ({ onAdd }) => (
  <div className={styles.addContactContainer} onClick={onAdd}>
    <div className={styles.addIconContainer}>
      <FaPlus className={styles.addIcon} />
    </div>
    <span className={styles.addContactText}>Add New Contact</span>
  </div>
);

export default AddNewContact;
