import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import NextButton from '../components/NextButton'
import DocumentTitle from "../components/DocumentTitle.jsx";
import { theBookOfBOOKNAMEchapterX } from "../../public/data/_languages.js"
import { getNextButtonInfo, getPrevButtonInfo } from "../utils/next-and-prev-button-info.js"
import { Context } from "../main";
import myData from "../../public/data/_languages.js"
import books from "../../public/data/books.js"
import "../pages/ChapterPage.css"

import dialogue from "../../public/data/dialouge.js"


export function ChapterPage({ book, chapter }) {
    const [verses, setVerses] = useState([]);
    const [language, setLanguage] = useContext(Context);
    const [showDialogue, setShowDialogue] = useState(false); //make this like a context thing or whatever like langauge is, so that when u have it on and then go to another page its still on

    DocumentTitle(myData[language][book.urlName] + " " + chapter);

    useEffect(() => {
        const fetchVerses = async () => {
            try {
                let path = `data/bom/bom-${language}/${book.urlName}/${chapter}.txt`;
                const response = await fetch(path);
                const text = await response.text();
                const lines = text.split('\n').slice(0, -1); //I slice because the text files have an empty \n at the end
                //setVerses(lines.map((line, index) => <p key={index}> {index + 1} {line}</p>));


                //dialouge
                const modifiedVerses = lines.map((line, index) => {
                    const verseNumber = index + 1;
                    const dialogueForVerse = dialogue.find(dialogue => dialogue.bookIndex === books.findIndex(item => item.urlName === book.urlName) && dialogue.chapterIndex === chapter && dialogue.startVerse === verseNumber);

                    if (showDialogue && dialogueForVerse) {
                        // If showDialogue is true and there is a dialogue object for this verse, add <span> around the line
                        return (
                            <p key={index}>
                                <span className={`dialogue ${dialogueForVerse.who}`}>
                                    {verseNumber} {line}
                                </span>
                            </p>
                        );
                    } else {
                        return <p key={index}>{verseNumber} {line}</p>;
                    }
                });
                setVerses(modifiedVerses);
            } catch (error) {
                console.error('Error fetching verses:', error);
            }
        };
        fetchVerses();
    }, [book.urlName, chapter, language, showDialogue]);



    const toggleDialogue = () => {
        setShowDialogue(prevState => !prevState); // Toggle showDialogue state
    };

    return (
        <>
            <NavBar book={book} chapter={chapter} />
            <h1>
                {theBookOfBOOKNAMEchapterX(language, myData[language][book.urlName], chapter)}
            </h1>

            <NextButton info={getPrevButtonInfo(book, chapter)} />
            <NextButton info={getNextButtonInfo(book, chapter)} />

            <button onClick={toggleDialogue}>{showDialogue ? 'Hide Dialogue' : 'Show Dialogue'}</button>

            {verses}
        </>
    );
}