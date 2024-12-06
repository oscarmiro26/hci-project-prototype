// src/pages/LoadingPage.jsx
import React from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
    return (
        <div className="loading-container">
            <div className="logo">
                <img src="/src/assets/loading-screen-fc.png" alt="Illustration" />
            </div>
            <h1 className="app-name">Easi</h1>
        </div>
    );
};

export default LoadingPage;
