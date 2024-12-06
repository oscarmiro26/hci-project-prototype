// src/pages/HomePage.jsx
import React, { useState } from "react";
import Card from "../components/Card";
import CardModal from "../components/CardModal";
import cardsData from "../data/cardsData.json";
import headerImage from "../assets/home-header-flipped.png";
import styles from "./HomePage.module.css";

const HomePage = ({ setCurrentPage }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardPress = (cardId) => {
        const card = cardsData.find((card) => card.id === cardId);
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
    };

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.headerContainer}>
                {/* Greeting Text and Image */}
                <div className={styles.greetingContainer}>
                    <div className={styles.greetingText}>
                        <h1 className={styles.greetingTitle}>Hey,</h1>
                        <h2 className={styles.greetingSubtitle}>How are you?</h2>
                    </div>
                    <div className={styles.headerImageContainer}>
                        <img
                            src={headerImage}
                            alt="Header"
                            className={styles.headerImage}
                        />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className={styles.mainContent}>
                <div className={styles.topTextContainer}>
                    <p className={styles.topText}>choose to help manage your anxiety</p>
                </div>
                <div className={styles.cardsGrid}>
                    {cardsData.map((card) => (
                        <Card
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            imageSrc={card.imageSrc}
                            onPress={() => handleCardPress(card.id)}
                        />
                    ))}
                </div>
            </main>

            {/* Card Modal */}
            {isModalOpen && selectedCard && (
                <CardModal
                    card={selectedCard}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default HomePage;
