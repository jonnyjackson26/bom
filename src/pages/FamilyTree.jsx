import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import DocumentTitle from "../components/DocumentTitle.jsx";
import { Context } from "../main.jsx";
import "../pages/FamilyTree.css"
import characters from "../../public/data/characters.js"


export function FamilyTree() {
    DocumentTitle("Tree - Book of Mormon");

    return (
        <>
            <NavBar book={null} chapter={null} />

            <h1>Geneological Tree of the BOM</h1>

            {characters.map((character) => (
                <Link key={character.id} to={`/characters/${character.id}`}>
                    {character.name}
                </Link>
            ))}
        </>
    );
}
