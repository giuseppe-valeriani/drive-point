import React from "react";
import "./PersonNotes.scss";

const PersonNotes = ({ pupil, showNotes, setShowNotes }) => {
  return (
    <section className="person-notes">
      <button
        className="person-notes__button"
        onClick={() => setShowNotes(!showNotes)}
      >
        show notes
      </button>
      {showNotes && (
        <article>
          <textarea value={pupil.notes} />
        </article>
      )}
    </section>
  );
};

export default PersonNotes;
