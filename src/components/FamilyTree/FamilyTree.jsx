import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./FamilyTree.css"


export function FamilyTree({ character }) {
    return (
        <>
            <h1>{character.name}</h1>
        </>
    );
}
