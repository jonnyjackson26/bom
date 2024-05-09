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
    const descendant = character.descendentOf != null ? getCharacterById(character.descendentOf) : null;
    //grandparents
    const dadsdad = (father && father.fatherId != null) ? getCharacterById(father.fatherId) : null;
    const dadsmom = (father && father.motherId != null) ? getCharacterById(father.motherId) : null;
    const momsdad = (mother && mother.fatherId != null) ? getCharacterById(mother.fatherId) : null;
    const momsmom = (mother && mother.motherId != null) ? getCharacterById(mother.motherId) : null;
    //grandchildren
    let grandchildren = [];
    if (children) {
        for (let i = 0; i < children.length; i++) {
            for (let j = 0; j < children[i].childrenIDs.length; j++) {
                grandchildren.push(getCharacterById(children[i].childrenIDs[j]))
            }
        }
    }

    return (
        <>
            <div className="treeBox">
                {(dadsdad || dadsmom) && <div className="grandparentsRow">
                    {dadsdad && <Person character={dadsdad} relation="grandparent" />}
                    {dadsmom && <Person character={dadsmom} relation="grandparent" />}
                    {momsdad && <Person character={momsdad} relation="grandparent" />}
                    {momsmom && <Person character={momsmom} relation="grandparent" />}
                </div>}

                {(father || mother) && <div className="parentsRow"> {/* the father || mother makes the row only appear if there is a parent. This is a design choice */}
                    {father && <Person character={father} relation="father" />}
                    {mother && <Person character={mother} relation="mother" />}
                </div>}

                {descendant && <div className='descendantRow'>
                    <Person character={descendant} relation="descendant" />
                </div>}

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
                <div className="grandchildrensRow">
                    {grandchildren &&
                        grandchildren.map((grandchild) => (
                            <Person character={grandchild} relation="grandchild" />
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
