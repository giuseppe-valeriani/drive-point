import React, { useState } from "react";
import Link from "next/link";
import "./Form.scss";

const emptyForm = { name: "", starting_date: "" };

const Form = ({ formData }) => {
  const [pupil, setPupil] = useState(emptyForm);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pupil.name || !pupil.starting_date) {
      setError(true);
      return;
    }
    setError(false);
    formData(pupil);
    setPupil(emptyForm);
  };

  const handleNameChange = (e) => {
    setPupil({ ...pupil, name: e.target.value });
  };

  const handleDateChange = (e) => {
    const dataFormatted = e.target.value.split("-").reverse().join("/");
    setPupil({ ...pupil, starting_date: dataFormatted });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__field">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleNameChange}
          placeholder="Name Surname"
          className="form__input"
          id="name"
          type="text"
          name="name"
        />
      </div>
      <div className="form__field">
        <label htmlFor="starting_date">Starting Date</label>
        <input
          onChange={handleDateChange}
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
      {error && <div className="form__error">Invalid fields</div>}
    </form>
  );
};

export default Form;
