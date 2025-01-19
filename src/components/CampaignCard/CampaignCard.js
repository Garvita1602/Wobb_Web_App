import React, { useState } from 'react';
import './CampaignCard.css';

const getProgressColor = (hired, slots) => {
    const progress = (hired / slots) * 100;

    if (progress >= 75) return 'green'; // Green for progress >= 75%
    if (progress >= 50) return 'blue';  // Blue for progress between 50% and 74%
    if (progress >= 25) return 'yellow'; // Yellow for progress between 25% and 49%
    return 'red'; // Red for progress < 25%
};

const CampaignCard = ({ brand, payout, slots, hired, campaignImage, description }) => {
    const progressColor = getProgressColor(hired, slots);
    const [showApplyButton, setShowApplyButton] = useState(false);
    const [isApplied, setIsApplied] = useState(false);
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const toggleHeartColor = () => {
        setIsHeartClicked(!isHeartClicked); // Toggle the heart state
    };


    const handleApplyToggle = () => {
        setIsApplied(!isApplied); // Toggle between Apply and Unapply
        setShowApplyButton(false); // Close the apply dropdown
    };

    const closeDropdown = () => {
        setShowApplyButton(false); // Close dropdown when clicking anywhere on the card
    };

    return (
        <div
            className={`campaign-card ${isApplied ? 'applied' : ''}`}
            onClick={closeDropdown}
        >
            {/* Top Section */}
            <div className="card-header">
                <div className="brand-info">
                    <div className="brand-icon">
                        {brand[0].toUpperCase()} {/* Show brand initial */}
                    </div>
                    <span className="brand-name">{brand}</span>
                </div>

                <i
                    className="fas fa-ellipsis-h options-icon"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent card click from triggering
                        setShowApplyButton(!showApplyButton);
                    }}
                ></i>

                {showApplyButton && (
                    <button
                        className="apply-btn-dropdown"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent card click from triggering
                            handleApplyToggle();
                        }}
                    >
                        {isApplied ? 'Unapply' : 'Apply'}
                    </button>
                )}
            </div>


            {/* Details Section */}
            <div className="details-section">
                <h3 className="brand-name">{brand}</h3>
                <p className="payout">Payout: {payout.type} - {payout.amount}</p>
                <p className="hired">
                    {hired} / {slots} Hired
                </p>
                <div className="progress-bar">
                    <div
                        className={`progress-fill ${progressColor}`}
                        style={{ width: `${(hired / slots) * 100}%` }}
                    ></div>
                </div>
                <p className="campaign-description">{description}</p>
            </div>

            {/* Footer Section */}
            <div className="card-footer">
                <div className="footer-icons">
                    <i
                        className={`fas fa-heart ${isHeartClicked ? 'red' : ''}`}
                        onClick={toggleHeartColor}
                    ></i>
                    <i className="fas fa-comment"></i>
                    <i className="fas fa-share"></i>
                </div>
            </div>

            {/* Applied Overlay */}
            {isApplied && <div className="applied-overlay">Applied</div>}
        </div>
    );
};

export default CampaignCard;
