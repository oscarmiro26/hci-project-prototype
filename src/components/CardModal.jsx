// src/components/CardModal.jsx
import React from 'react';
import styles from './CardModal.module.css';
import { FaSpa, FaRunning } from 'react-icons/fa';

const iconMap = {
  FaSpa: FaSpa,
  FaRunning: FaRunning,
};

const CardModal = ({ card, onClose }) => {
  const { modalImageSrc, modalHeader, rows, backgroundColor, icon } = card;
  const IconComponent = iconMap[icon];

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        style={{ backgroundColor }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <img src={modalImageSrc} alt="Modal Header" className={styles.modalImage} />
          <h2 className={styles.modalTitle}>{modalHeader}</h2>
        </div>
        <div className={styles.modalButtonsContainer}>
          {rows.map((row, index) => (
            <button key={index} className={styles.modalButton}>
              <div className={styles.buttonIcon}>
                {IconComponent && <IconComponent size={40} />}
              </div>
              <div className={styles.buttonText}>
                <span className={styles.buttonHeader}>{row.header}</span><br />
                <span className={styles.buttonBody}>{row.body}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardModal;
