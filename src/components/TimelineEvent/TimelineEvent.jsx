
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./TimelineEvent.css"



export function TimelineEvent({ event }) {

    return (
        <>
            <Link key={event.id} to={`/timeline/${event.id}`}>
                {event.description} - {event.date}
            </Link>
        </>
    );
}


/*
this.id = id;
this.description = description;
this.reference = reference;
this.date = date;
this.dateReference = dateReference;
*/