import React from "react";
import Link from "next/link";
import "./Form.scss";

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__field">
        <label htmlFor="name">Name</label>
        <input className="form__input" id="name" type="text" name="name" />
      </div>
      <div className="form__field">
        <label htmlFor="starting_date">Starting Date</label>
        <input
          className="form__input"
          id="starting_date"
          type="date"
          name="starting_date"
        />
      </div>
      <div className="form__buttons">
        <button className="form__button" type="submit">
          add
        </button>
        <Link href="/">
          <div className="form__button">cancel</div>
        </Link>
      </div>
    </form>
  );
};

export default Form;
