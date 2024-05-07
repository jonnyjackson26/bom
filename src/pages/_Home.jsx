import { Link } from "react-router-dom"
import React, { useState, useEffect, useContext } from 'react';
import books from '../../public/data/books.js';
import NavBar from "../components/NavBar";
import myData from "../../public/data/_languages.js"
import DocumentTitle from "../components/DocumentTitle.jsx";

import { Context } from "../main"; //can make custom hook


export function Home() {
    const [language, setLanguage] = useContext(Context);

    DocumentTitle(myData[language]["bookOfMormon"]);

    return (
        <>
            <NavBar book={undefined} chapter={undefined} />
            <h1>
                {myData[language]["book-of-mormon"]} {/*The Book of Mormon: Another Testament of Jesus Christ*/}
            </h1>

            {books.map((book) => (
                <Link key={book.urlName} to={`/${book.urlName}`}>
                    {myData[language][book.urlName]} {/* Worte von Mormon or Words of Mormon */}
                </Link>
            ))}
        </>
    )
}


/*
TODO:
 - put nav bar on bottom for mobile
 - fix language dropdown

 long term:
 - sell books
 - add quotes in a json file
*/