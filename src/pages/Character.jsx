import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import DocumentTitle from "../components/DocumentTitle.jsx";
import { Context } from "../main.jsx";
import "../pages/Character.css"
import dialogue from "../../public/data/dialouge.js"


export function Character({ character }) {
    DocumentTitle(character.name);

    return (
        <>
            <h1>{character.name}</h1>
            <p>Fathers name: {character.fatherName}</p>
            <p>Mothers name: {character.motherName}</p>
        </>
    );
}