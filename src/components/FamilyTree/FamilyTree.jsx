import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./FamilyTree.css"
import characters from '../../../public/data/characters';
import { Person } from "./Person.jsx"


export function FamilyTree({ character }) {
    //basic family tree: shows father and mother, siblings with father and mother, and children
    const father = character.fatherId != null ? getCharacterById(character.fatherId) : null;
    const mother = character.motherId != null ? getCharacterById(character.motherId) : null;
    const children = character.childrenIDs != null ? getCharactersByIds(character.childrenIDs) : null;
    const siblings = ((father && father.childrenIDs != null) && (mother && mother.childrenIDs != null)) ? getCharactersByIds(father.childrenIDs.filter(id => mother.childrenIDs.includes(id) && id !== character.id)) : null; //the common values shared between father.childrenIDs and mother.childrenIDs and not yourself
    return (
        <>
            <div className="treeBox">
                <div className="parentsRow">
                    {father && <Person character={father} relation="father" />}
                    {mother && <Person character={mother} relation="mother" />}
                </div>
                <div className="siblingsRow">
                    <Person character={character} relation="self" />
                    {siblings &&
                        siblings.map((sibling) => (
                            <Person character={sibling} relation="sibling" />
                        ))
                    }
                </div>
                <div className="childrensRow">
                    {children &&
                        children.map((child) => (
                            <Person character={child} relation="child" />
                        ))
                    }
                </div>
            </div >
        </>
    );
}

function getCharacterById(id) {
    return characters.find(character => character.id === id);
}
function getCharactersByIds(ids) {
    return characters.filter(character => ids.includes(character.id));
}
