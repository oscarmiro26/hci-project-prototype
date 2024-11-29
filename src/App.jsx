// src/App.jsx
import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import SafetyNetPage from "./pages/SafetyNetPage";
import ProfilePage from "./pages/ProfilePage";
import LoadingPage from "./pages/LoadingPage";
import BottomNav from "./components/BottomNav";
import { FaBell } from "react-icons/fa";
import './App.css';

const App = () => {
    const [currentPage, setCurrentPage] = useState("LoadingPage");
    const [isPublic, setIsPublic] = useState(true);

    const handleToggle = () => {
        setIsPublic(!isPublic);
    };

    const handleNotificationClick = () => {
        console.log("Notifications opened");
    };

    React.useEffect(() => {
        if (currentPage === "LoadingPage") {
            setTimeout(() => setCurrentPage("HomePage"), 1000);
        }
    }, [currentPage]);

    const renderPage = () => {
        switch (currentPage) {
            case "HomePage":
                return <HomePage setCurrentPage={setCurrentPage} />;
            case "HistoryPage":
                return <HistoryPage setCurrentPage={setCurrentPage} />;
            case "SafetyNetPage":
                return <SafetyNetPage setCurrentPage={setCurrentPage} />;
            case "ProfilePage":
                return <ProfilePage setCurrentPage={setCurrentPage} />;
            default:
                return <LoadingPage />;
        }
    };

    return (
        <>
            {/* Fixed Top-Right Buttons */}
            {currentPage !== "LoadingPage" && (
                <div className="fixedTopRightButtons">
                    {currentPage === "HomePage" && (
                        <div
                            className={`toggleSwitch ${isPublic ? "public" : "private"}`}
                            onClick={handleToggle}
                            aria-pressed={!isPublic}
                        >
                            <div className="switchBall"></div>
                            <div className={`switchText ${isPublic ? "publicText" : "privateText"}`}>
                                {isPublic ? "PUBLIC" : "PRIVATE"}
                            </div>
                        </div>
                    )}
                    <button
                        className="notificationButton"
                        onClick={handleNotificationClick}
                        aria-label="Notifications"
                    >
                        <FaBell className="notificationIcon" />
                    </button>
                </div>
            )}
            {/* Render Current Page */}
            {renderPage()}
            {/* Bottom Navigation */}
            {currentPage !== "LoadingPage" && (
                <footer className="bottomNavWrapper">
                    <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </footer>
            )}
        </>
    );
};

export default App;
