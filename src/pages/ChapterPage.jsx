import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { theBookOfBOOKNAMEchapterX } from "../../public/data/_languages.js"

import { Context } from "../main";


export function ChapterPage({ book, chapter }) {
    const [verses, setVerses] = useState([]);
    const [language, setLanguage] = useContext(Context);


    useEffect(() => {
        const fetchVerses = async () => {
            try {
                let path = `data/bom/bom-${language}/${book.urlName}/${chapter}.txt`;
                const response = await fetch(path);
                const text = await response.text();
                const lines = text.split('\n').slice(0, -1); //I slice because the text files have an empty \n at the end
                setVerses(lines.map((line, index) => <p key={index}> {index + 1} {line}</p>));
            } catch (error) {
                console.error('Error fetching verses:', error);
            }
        };

        fetchVerses();
    }, [book.urlName, chapter, language]);

    return (
        <>
            <NavBar book={book} chapter={chapter} />
            <h1>
                {theBookOfBOOKNAMEchapterX(language, book.bookName, chapter)}
            </h1>

            {verses}
        </>
    );
}