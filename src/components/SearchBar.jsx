// src/components/SearchBar.jsx
import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchTerm, onSearch }) => (
  <div className={styles.searchContainer}>
    <FaSearch className={styles.searchIcon} />
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={onSearch}
      className={styles.searchInput}
    />
  </div>
);

export default SearchBar;
