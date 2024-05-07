import React, { useState, useEffect, useContext } from 'react';
import './NavBar.css'
import Path from './Path';
import books from '../../public/data/books.js';
import myData from "../../public/data/_languages.js"

import { Context } from "../main";

const NavBar = ({ book, chapter }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const openDropdown = () => {
        setIsDropdownOpen(true);
    };
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const [language, setLanguage] = useContext(Context);

    const handleLanguageChange = async (lang) => {
        setLanguage(lang);
    }

    return (
        <nav className="navbar">

            <Path book={book} chapter={chapter} />

            <div className="dropdown" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                <button className="dropbtn">
                    <img src="public/language.png" alt="languages" className='icon'></img>
                </button>

                {isDropdownOpen && (
                    <select className="dropdown-content" onChange={(e) => handleLanguageChange(e.target.value)} value={language}>
                        {Object.keys(myData).map((langKey) => (
                            <option key={langKey} value={langKey}>
                                {myData[langKey][langKey]} / {myData[language][langKey]}
                            </option>
                        ))}
                    </select>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
