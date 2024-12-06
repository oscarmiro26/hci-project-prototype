// src/pages/HistoryPage.jsx
import React, { useState } from "react";
import styles from "./HistoryPage.module.css";
import { CiSearch, CiCalendar } from "react-icons/ci";

const HistoryPage = ({ setCurrentPage }) => {
    const [activeTimeFrame, setActiveTimeFrame] = useState("Daily");

    // Hardcoded sleep cycle data
    const sleepData = [
        { stage: "Deep Sleep", percentage: 25, time: "1h 45m", color: "#589356" },
        { stage: "Light Sleep", percentage: 50, time: "3h 30m", color: "#23b881" },
        { stage: "REM Sleep", percentage: 15, time: "1h 3m", color: "#00d09e" },
        { stage: "Awake", percentage: 10, time: "42m", color: "#0e3e3e" },
    ];

    const handleTimeFrameChange = (timeFrame) => {
        setActiveTimeFrame(timeFrame);
    };

    const timeFrames = ["Daily", "Weekly", "Monthly", "Yearly"];

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.headerContainer}>
                {/* Top Row */}
                <div className={styles.topRow}>
                    {/* Title */}
                    <h1 className={styles.headerTitle}>History</h1>
                </div>
                {/* Time Frame Buttons */}
                <div className={styles.timeFrameContainer}>
                    {timeFrames.map((timeFrame) => (
                        <button
                            key={timeFrame}
                            className={`${styles.timeFrameButton} ${activeTimeFrame === timeFrame ? styles.activeTimeFrameButton : ""
                                }`}
                            onClick={() => handleTimeFrameChange(timeFrame)}
                        >
                            {timeFrame}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <main className={styles.mainContent}>
                {/* Stress Component */}
                <div className={styles.stressContainer}>
                    <div className={styles.stressHeader}>
                        <h2 className={styles.stressTitle}>
                            {activeTimeFrame} Stress
                        </h2>
                        <div className={styles.stressButtons}>
                            <button className={styles.stressButton}>
                                <CiSearch className={styles.stressButtonIcon} />
                            </button>
                            <button className={styles.stressButton}>
                                <CiCalendar className={styles.stressButtonIcon} />
                            </button>
                        </div>
                    </div>
                    {/* Placeholder for the graph */}
                    <div className={styles.graphPlaceholder}>
                        {/* Graph will be added here later */}
                        <img
                            src={`/src/assets/history-${activeTimeFrame.toLowerCase()}-graph-prototype.png`}
                            alt={`[${activeTimeFrame} Graph]`}
                            className={styles.graphImage}
                        />
                    </div>
                </div>

                {/* Sleep Cycle Component */}
                <div className={styles.sleepCycleContainer}>
                    <h2 className={styles.sleepCycleTitle}>Sleep Cycle</h2>
                    <div className={styles.sleepCycleContent}>
                        {/* Donut Chart */}
                        <div className={styles.donutChartContainer}>
                            <div className={styles.donutChart}>
                                <div className={styles.donutInnerCircle}>
                                    <span className={styles.totalSleepLabel}>Total Sleep</span>
                                    <span className={styles.totalSleepTime}>7 h</span>
                                </div>
                            </div>
                        </div>
                        {/* Legend */}
                        <div className={styles.sleepLegend}>
                            {sleepData.map((item, index) => (
                                <div key={index} className={styles.legendItem}>
                                    <div
                                        className={styles.legendColor}
                                        style={{ backgroundColor: item.color }}
                                    ></div>
                                    <div className={styles.legendText}>
                                        <span className={styles.legendLabel}>
                                            {item.stage}{" "}
                                            <span className={styles.legendPercentage}>
                                                ({item.percentage}%)
                                            </span>
                                        </span>
                                        <span className={styles.legendTime}>{item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HistoryPage;
