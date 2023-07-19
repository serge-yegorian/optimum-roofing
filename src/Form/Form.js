import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Form.scss";
function Form() {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const formRef = useRef();

  const checkEmptyFields = () => {
    const inputs = document.querySelectorAll(".form__input");
    let isEmpty = false;
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        isEmpty = true;
      }
    });
    setIsSubmitDisabled(isEmpty);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ehb710n', 'template_tfoh52p', formRef.current, 'JofyiBISK_50XH6UG')
      .then((result) => {
          console.log(result.text);
          window.alert( "Sent succesfully! We will contact you within 24 hours!")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section className="form" id="form">
      <h2 className="form__heading">🛠️ Let exprets help:</h2>
      <form ref={formRef} className="form__form" onSubmit={sendEmail}>
        <div className="form__fields">
          <div className="form__div">
            <input
              onChange={checkEmptyFields}
              id="name"
              name="name"
              className="form__input"
              type="text"
              required
            />
            <div className="form__underline"></div>
            <label className="form__label">Name</label>
          </div>
          <div className="form__div">
            <input
              onChange={checkEmptyFields}
              id="email"
              name="email"
              className="form__input"
              type="email"
              required
            />
            <div className="form__underline"></div>
            <label className="form__label">Email</label>
          </div>
          <div className="form__div">
            <input
              onChange={checkEmptyFields}
              id="phone"
              name="phone"
              className="form__input"
              type="phone"
              required
            />
            <div className="form__underline"></div>
            <label className="form__label">Phone</label>
          </div>
        </div>
        <div className="form__submit-div">
          <button disabled={isSubmitDisabled} className="form__submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
