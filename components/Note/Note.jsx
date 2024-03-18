import React from "react";
import "./Note.scss";

const Note = ({ note }) => {
  const refactoredDate = note.date.split("/");
  const fullDate = new Date(
    refactoredDate[2],
    refactoredDate[1],
    refactoredDate[0]
  );
  const dayOfWeek = fullDate.getDay();
  const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = fullDate.getDate();
  const month = fullDate.getMonth();
  const year = fullDate.getFullYear();
  return (
    <>
      <div className="note__date">{`${daysArray[dayOfWeek]}, ${day}/${month}/${year}`}</div>
      <div className="note__amount">{`£ ${note.amount}`}</div>
      <button
        className={`note__is-paid ${
          note.isPaid ? `note__is-paid--paid` : `note__is-paid--unpaid`
        }`}
      ></button>
    </>
  );
};

export default Note;
