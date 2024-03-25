import React from "react";
import Payment from "@components/Payment/Payment";
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
        show payments
      </button>
      {showPayments && (
        <article>
          <div>
            {pupil.payments.map((payment) => (
              <article key={payment._id} className="person-payments__article">
                <Payment
                  className="person-payments__payment"
                  payment={payment}
                />
              </article>
            ))}
          </div>
          <div className="person-payments__total">
            <div className="person-payments__label">Total</div>
            <div className="person-payments__balance">{`£ ${total}`}</div>
          </div>
        </article>
      )}
    </section>
  );
};

export default PersonPayments;
