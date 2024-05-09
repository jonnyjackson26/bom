import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./FamilyTree.css"
import characters from '../../../public/data/characters';
import { Person } from "./Person.jsx"


export function FamilyTree({ character }) {
    const father = character.getFather();
    const mother = character.getMother();
    const children = character.getChildren();
    const siblings = character.getSiblings();
    const spouses = character.getSpouses();
    const descendant = character.getDescendant();

    //grandchildren
    let grandchildren = [];
    if (children) {
        for (let i = 0; i < children.length; i++) {
            for (let j = 0; j < children[i].childrenIDs.length; j++) {
                grandchildren.push(getCharacterById(children[i].childrenIDs[j]))
            }
        }
    }

    //in the middle row, shows SELF, one wife*, all siblings*, and each of their wives* (*IF APPLICABLE)
    return (
        <>
            <div className="treeBox">
                {<div className="grandparentsRow">
                    {father && father.getFather() && <Person character={father.getFather()} relation="grandparent" />}
                    {father && father.getMother() && <Person character={father.getMother()} relation="grandparent" />}
                    {mother && mother.getFather() && <Person character={mother.getFather()} relation="grandparent" />}
                    {mother && mother.getMother() && <Person character={mother.getMother()} relation="grandparent" />}
                </div>}

                {(father || mother) && <div className="parentsRow"> {/* the father || mother makes the row only appear if there is a parent. This is a design choice */}
                    {father && <Person character={father} relation="father" />}
                    {mother && <Person character={mother} relation="mother" />}
                </div>}

                {descendant && <div className='descendantRow'>
                    <Person character={descendant} relation="descendant" />
                </div>}

                <div className="siblingsRow">
                    {/*siblings */}
                    {siblings &&
                        siblings.map((sibling) => (
                            (sibling.id == character.id ?
                                <> {/* if the sibling is the current person */}
                                    <Person character={sibling} relation={'self'} />
                                    {spouses && spouses.length > 0 && <Person character={spouses[0]} relation={'spouse'} />}
                                </>
                                :
                                <>
                                    <Person character={sibling} relation={'sibling'} />
                                    {sibling.getSpouses()[0] && <Person character={sibling.getSpouses()[0]} relation={'cuañado'} />}
                                </>
                            )
                        ))
                    }
                    {/*if they have no siblings they wouldnt be displayed otherwise */}
                    {!siblings && <Person character={character} relation={'self'} />}
                    {!siblings && spouses && spouses.length > 0 && <Person character={spouses[0]} relation={'spouse'} />}
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
