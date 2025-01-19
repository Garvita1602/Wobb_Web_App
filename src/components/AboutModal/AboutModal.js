import React from 'react';
import './AboutModal.css';

const AboutModal = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>About Wobb</h2>
                <p>
                    Wobb is an influencer marketing platform that connects influencers with
                    brands for collaboration opportunities. Influencers can browse and apply
                    to campaigns that suit their niche, collaborate with brands, and get
                    rewarded through various payout types like barter, refunds, and fixed pay.
                </p>
                <p>
                    Wobb was founded in San Francisco, California, in 2020.
                </p>

                <h3>Contact Us</h3>
                <p>If you have any questions or would like to get in touch, feel free to contact us:</p>
                <ul>
                    <p>Email: <a href="mailto:contact@wobb.com">contact@wobb.com</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/company/wobb" target="_blank" rel="noopener noreferrer">Wobb on LinkedIn</a></p>
                    <p>Address: 123 Marketing Street, San Francisco, CA, 94105</p>
                </ul>

                <button onClick={onClose} className="close-btn">Close</button>
            </div>
        </div>
    );
};

export default AboutModal;
