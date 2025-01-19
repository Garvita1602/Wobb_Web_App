import React from 'react';
import './ProgressBar.css';

const getProgressColor = (progress) => {
    if (progress >= 75) {
        return 'green';  // Green for progress >= 75%
    } else if (progress >= 50) {
        return 'blue';   // Blue for progress between 50% and 74%
    } else if (progress >= 25) {
        return 'yellow'; // Yellow for progress between 25% and 49%
    } else {
        return 'red';    // Red for progress < 25%
    }
};

const ProgressBar = ({ progress }) => {
    const progressColor = getProgressColor(progress);

    return (
        <div className="progress-bar-container">
            <div className="progress-bar">
                <div
                    className={`progress-bar-fill ${progressColor}`}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <span className="progress-label">{progress}%</span>
        </div>
    );
};

export default ProgressBar;
