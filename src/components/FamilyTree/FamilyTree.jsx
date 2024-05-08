import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./FamilyTree.css"
import characters from '../../../public/data/characters';


export function FamilyTree({ character }) {
    //basic family tree: shows father and mother, siblings with father and mother, and children
    const father = character.fatherId != null ? getCharacterById(character.fatherId) : null;
    const mother = character.motherId != null ? getCharacterById(character.motherId) : null;
    const children = character.childrenIDs != null ? getCharactersByIds(character.childrenIDs) : null;
    const siblings = (father.childrenIDs != null || mother.childrenIDs != null) ? getCharactersByIds(father.childrenIDs.filter(id => mother.childrenIDs.includes(id) && id !== character.id)) : null; //the common values shared between father.childrenIDs and mother.childrenIDs and not yourself
    return (
        <>
            <div className="treeBox">
                <div className="parentsRow">
                    {father && <div className="father">
                        <Link key={`${father.id}`} to={`/characters/${father.id}`}>{father.name}</Link>
                    </div>}
                    {mother && <div className="mother">
                        <Link key={`${mother.id}`} to={`/characters/${mother.id}`}>{mother.name}</Link>
                    </div>}
                </div>
                <div className="siblingsRow">
                    <div className="self">{character.name}</div>
                    {siblings &&
                        siblings.map((sibling, index) => (
                            <div key={index} className="child">
                                <Link key={`${sibling.id}`} to={`/characters/${sibling.id}`}>{sibling.name}</Link>
                            </div>
                        ))
                    }
                </div>
                <div className="childrensRow">
                    {children &&
                        children.map((child, index) => (
                            <div key={index} className="child">
                                <Link key={`${child.id}`} to={`/characters/${child.id}`}>{child.name}</Link>
                            </div>
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
