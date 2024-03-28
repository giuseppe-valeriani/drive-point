import React, { useState } from "react";
import "./PersonNotes.scss";

const PersonNotes = ({ pupil, handleUpdateNotes, showNotes, setShowNotes }) => {
  const [note, setNote] = useState(pupil.notes);

  const handleEdit = () => {
    if (showNotes === false) {
      return setShowNotes(!showNotes);
    }
    handleUpdateNotes(note);
    setShowNotes(false);
  };

  return (
    <section className="person-notes">
      <button className="person-notes__button" onClick={handleEdit}>
        {showNotes ? "save" : "show notes"}
      </button>
      {showNotes && (
        <article>
          <textarea
            className="person-notes__note"
            onChange={(e) => setNote(e.target.value)}
            defaultValue={note}
          />
        </article>
      )}
    </section>
  );
};

export default PersonNotes;
