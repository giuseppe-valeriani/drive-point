import React from "react";
import "./Payment.scss";

const Payment = ({ payment }) => {
  const refactoredDate = payment.date.split("/");
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
      <div className="payment__date">{`${daysArray[dayOfWeek]}, ${day}/${month}/${year}`}</div>
      <div className="payment__amount">{`£ ${payment.amount}`}</div>
      <button
        className={`payment__is-paid ${
          payment.isPaid ? `payment__is-paid--paid` : `payment__is-paid--unpaid`
        }`}
      ></button>
    </>
  );
};

export default Payment;
