import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, date, onDelete }) {
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem
                    key={ note.id }
                    id={ note.id }
                    date={ date }
                    onDelete={ onDelete }
                    { ...note }
                    />
                ))
            }
        </div>
    );
};

export default NoteList;