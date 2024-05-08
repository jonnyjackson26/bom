import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./FamilyTree.css"
import characters from '../../../public/data/characters';


export function FamilyTree({ character }) {
    //basic family tree: shows father and mother, siblings with father and mother, and children
    return (
        <>
            <div className="treeBox">
                <div className="parentsRow">
                    {character.fatherId != null ? <div className="father">{character.fatherId}</div> : ''}
                    {character.motherId != null ? <div className="mother">{character.motherId}</div> : ''}
                </div>
                <div className="siblingsRow">
                    <div className="selectedCharacter">{character.name}</div>
                </div>
                <div className="childrensRow">
                    {character.childrenIDs &&
                        character.childrenIDs.map((childId, index) => (
                            <div key={index} className="child">{childId}</div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
