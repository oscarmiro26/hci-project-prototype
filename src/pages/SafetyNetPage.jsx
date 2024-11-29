// src/pages/SafetyNetPage.jsx
import React, { useState, useEffect } from "react";
import ContactModal from "../components/ContactModal";
import styles from "./SafetyNetPage.module.css";
import { FaPlus, FaSearch } from "react-icons/fa";

// Import images
import profilePic1 from '../assets/SafetyNet/1.jpeg';
import profilePic2 from '../assets/SafetyNet/2.jpeg';
import profilePic3 from '../assets/SafetyNet/3.jpeg';

const SafetyNetPage = ({ setCurrentPage }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "Charles",
            status: "Active",
            phoneNumber: "123-456-7890",
            profilePic: profilePic1,
        },
        {
            id: 2,
            name: "Harry",
            status: "Active",
            phoneNumber: "987-654-3210",
            profilePic: profilePic2,
        },
        {
            id: 3,
            name: "Diana",
            status: "Inactive",
            phoneNumber: "555-555-5555",
            profilePic: profilePic3,
        },
    ]);
    const [filteredContacts, setFilteredContacts] = useState(contacts);
    const [selectedContactId, setSelectedContactId] = useState(null);
    const [holdTimeout, setHoldTimeout] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContact, setModalContact] = useState(null); // null for adding, contact object for editing

    useEffect(() => {
        setFilteredContacts(
            contacts.filter((contact) =>
                contact.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [contacts, searchTerm]);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
    };

    const handleContactPressStart = (contactId) => {
        const timeout = setTimeout(() => {
            setSelectedContactId(contactId);
        }, 2000); // 2 seconds
        setHoldTimeout(timeout);
    };

    const handleContactPressEnd = () => {
        if (holdTimeout) {
            clearTimeout(holdTimeout);
            setHoldTimeout(null);
        }
    };

    const handleOutsideClick = (e) => {
        if (selectedContactId && !e.target.closest(`.${styles.contactRowSelected}`)) {
            setSelectedContactId(null);
        }
    };

    useEffect(() => {
        if (selectedContactId !== null) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [selectedContactId]);

    const handleEditContact = (contactId) => {
        const contactToEdit = contacts.find((contact) => contact.id === contactId);
        setModalContact(contactToEdit);
        setIsModalOpen(true);
    };

    const handleDeleteContact = (contactId) => {
        setContacts(contacts.filter(contact => contact.id !== contactId));
        setSelectedContactId(null);
    };

    const handleAddNewContact = () => {
        setModalContact(null);
        setIsModalOpen(true);
    };

    const handleSaveContact = (savedContact) => {
        if (modalContact) {
            // Editing existing contact
            setContacts(contacts.map((contact) =>
                contact.id === savedContact.id ? savedContact : contact
            ));
        } else {
            // Adding new contact
            setContacts([...contacts, savedContact]);
        }
        setIsModalOpen(false);
        setModalContact(null);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalContact(null);
    };

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.headerContainer}>
                {/* Top Row */}
                <div className={styles.topRow}>
                    {/* Title */}
                    <h1 className={styles.headerTitle}>Safety Network</h1>
                </div>
                {/* Search Bar */}
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                        className={styles.searchInput}
                    />
                    <FaSearch className={styles.searchIcon} />
                </div>
            </div>

            {/* Main Content */}
            <main className={styles.mainContent}>
                {/* Add New Contact button */}
                <div className={styles.addContactsContainer}>
                    <button
                        className={styles.addContactsButton}
                        onClick={handleAddNewContact}
                    >
                        <div className={styles.addContactsIcon}>
                            <FaPlus />
                        </div>
                        <span className={styles.addContactsLabel}>Add New Contact</span>
                    </button>
                </div>

                {/* Contacts Section */}
                <div className={styles.contactsContainer}>
                    {filteredContacts.map((contact) => (
                        <div
                            key={contact.id}
                            className={`${styles.contactRow} ${selectedContactId === contact.id ? styles.contactRowSelected : ''
                                }`}
                            onMouseDown={() => handleContactPressStart(contact.id)}
                            onMouseUp={handleContactPressEnd}
                            onMouseLeave={handleContactPressEnd}
                            onTouchStart={() => handleContactPressStart(contact.id)}
                            onTouchEnd={handleContactPressEnd}
                        >
                            <img
                                src={contact.profilePic}
                                alt={contact.name}
                                className={styles.contactImage}
                            />
                            <span className={styles.contactName}>{contact.name}</span>
                            <span
                                className={
                                    contact.status === "Active"
                                        ? styles.statusActive
                                        : styles.statusInactive
                                }
                            >
                                {contact.status}
                            </span>
                            {selectedContactId === contact.id && (
                                <div className={styles.contactActions}>
                                    <button
                                        className={styles.editButton}
                                        onClick={() => handleEditContact(contact.id)}
                                    >
                                        EDIT
                                    </button>
                                    <button
                                        className={styles.deleteButton}
                                        onClick={() => handleDeleteContact(contact.id)}
                                    >
                                        🗑️
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>

            {/* Contact Modal */}
            <ContactModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveContact}
                contact={modalContact}
            />
        </div>
    );
};

export default SafetyNetPage;
