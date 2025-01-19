import React, { useState } from 'react';
import './Header.css';

const Header = ({ onAboutClick, onContactClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">Wobb</div>
            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <a href="#home">Home</a>
                <a href="#campaigns">Campaigns</a>
                <button onClick={onAboutClick}>About</button>
                <button onClick={onContactClick}>Contact</button>
            </nav>
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>
        </header>
    );
};

export default Header;
