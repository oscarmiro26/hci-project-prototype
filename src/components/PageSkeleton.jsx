// src/components/PageSkeleton.jsx
import React from "react";
import BottomNav from "./BottomNav";
import styles from "./PageSkeleton.module.css";
import { FaBell } from "react-icons/fa";

const PageSkeleton = ({ children, header, currentPage, setCurrentPage, bannerHeight }) => {
    const handleNotificationClick = () => {
        console.log("Notifications opened");
    };

    return (
        <div className={styles.container}>
            {/* Scrollable Content */}
            <div className={styles.scrollableContent}>
                {/* Green Background Section */}
                <header
                    className={styles.greenBackground}
                    style={{ height: bannerHeight ? `${bannerHeight}px` : '200px' }}
                >
                    {header && <div className={styles.header}>{header}</div>}
                    <button
                        className={styles.notificationButton}
                        onClick={handleNotificationClick}
                        aria-label="Notifications"
                    >
                        <FaBell className={styles.notificationIcon} />
                    </button>
                </header>

                {/* White Content Section */}
                <main className={styles.whiteSection}>{children}</main>

                {/* Spacer to blend with the navigation bar */}
                <div className={styles.bottomSpacer}></div>
            </div>

            {/* Bottom Navigation */}
            <footer className={styles.bottomNavWrapper}>
                <BottomNav
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </footer>
        </div>
    );
};

export default PageSkeleton;
