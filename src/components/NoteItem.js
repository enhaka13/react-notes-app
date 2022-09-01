import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, date, body, onDelete }) {
    return (
        <div className="note-item">
            <NoteItemContent title={ title } date={ date } body={ body } />
            <NoteItemAction id={ id } onDelete={ onDelete }/>
        </div>
    );
};

export default NoteItem;