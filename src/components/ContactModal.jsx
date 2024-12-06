// src/components/ContactModal.jsx
import React, { useState, useEffect } from 'react';
import styles from './ContactModal.module.css';

const ContactModal = ({ isOpen, onClose, onSave, contact }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('Active');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profilePic, setProfilePic] = useState('/src/assets/SafetyNet/default.jpeg');

    useEffect(() => {
        if (contact) {
            // Pre-fill the form with contact data when editing
            setName(contact.name);
            setStatus(contact.status);
            setPhoneNumber(contact.phoneNumber);
            setProfilePic(contact.profilePic || '/src/assets/SafetyNet/default.jpeg');
        } else {
            // Reset the form when adding a new contact
            setName('');
            setStatus('Active');
            setPhoneNumber('');
            setProfilePic('/src/assets/SafetyNet/default.jpeg');
        }
    }, [contact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            id: contact ? contact.id : Date.now(),
            name,
            status,
            phoneNumber,
            profilePic,
        };
        onSave(newContact);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>{contact ? 'Edit Contact' : 'Add New Contact'}</h2>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Status:
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </label>
                    <label>
                        Phone Number:
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </label>
                    <div className={styles.buttonGroup}>
                        <button type="submit">Save</button>
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
