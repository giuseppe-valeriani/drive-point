import React from "react";
import Note from "@components/Note/Note";
import "./PersonPayments.scss";

const PersonPayments = ({ pupil, showPayments, setShowPayments }) => {
  const total = pupil.payments
    .filter((payment) => payment.isPaid)
    .reduce((acc, cur) => (acc += cur.amount), 0);

  return (
    <section className="person-payments">
      <button
        className="person-payments__button"
        onClick={() => setShowPayments(!showPayments)}
      >
        Show Payments
      </button>
      {showPayments &&
        pupil.payments.map((note) => (
          <article key={note._id} className="person-payments__article">
            <Note className="pupil__note" note={note} />
          </article>
        ))}
      <article className="person-payments__total">
        <div>Total</div>
        <div>{`${total} £`}</div>
      </article>
    </section>
  );
};

export default PersonPayments;
