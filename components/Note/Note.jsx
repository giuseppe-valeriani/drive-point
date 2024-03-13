import React from "react";
import "./Note.scss";

const Note = ({ note }) => {
  const dateRefactored = new Date(note.date).toDateString();
  return (
    <>
      <div className="note__date">{`${dateRefactored}`}</div>
      <div className="note__amount">{`${note.amount} £`}</div>
      <button
        className={`note__is-paid ${
          note.isPaid ? `note__is-paid--paid` : `note__is-paid--unpaid`
        }`}
      ></button>
    </>
  );
};

export default Note;
