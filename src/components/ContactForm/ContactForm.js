import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setIsSubmitted(true); // Update the state to show the "Submitted" message
    };

    return (
        <div className="modal">
            <div
                className={`modal-content ${isSubmitted ? 'submitted' : ''}`}
                style={{
                    background: isSubmitted ? 'rgba(255, 255, 255, 0.8)' : 'white', // Change background to white-ish transparent if submitted
                }}
            >
                {isSubmitted ? (
                    <div className="submitted-message">
                        <h3>Submitted</h3>
                    </div>
                ) : (
                    <>
                        <h2>Contact Us</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" required></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </>
                )}
                <button onClick={onClose} className="close-btn">Close</button>
            </div>
        </div>
    );
};

export default ContactForm;
