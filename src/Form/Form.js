
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Form.scss";

function Form() {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ouzpt97', 'template_0njsdj7', formRef.current, 'JofyiBISK_50XH6UG')
      .then((result) => {
          console.log(result.text);
          window.alert( "Sent succesfully! We will contact you within 24 hours!")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };



  return (
    <section className="form">
      <h2 className="form__heading">Let the Florida experts help:</h2>
      <form ref={formRef} className="form__form" onSubmit={sendEmail}>
        <div className="form__fields">
          <div className="form__div">
            <input
              id="name"
              name="name"
              className="form__input"
              type="text"
              required
            />
            <div className="form__underline"></div>
            <label className="form__label" htmlFor='name'>Name</label>
          </div>
          <div className="form__div">
            <input
              id="email"
              name="email"
              className="form__input"
              type="email"
              required
            />
            <div className="form__underline"></div>
            <label className="form__label" htmlFor='email'>Email</label>
          </div>
          <div className="form__div">
            <input
              id="phone"
              name="phone"
              className="form__input"
              type="phone"
              required
            />
            <div className="form__underline"></div>
            <label className="form__label" htmlFor='phone'>Phone</label>
          </div>
        </div>
        <div className="form__submit-div">
          <button className="form__submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
