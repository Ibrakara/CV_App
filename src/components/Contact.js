import React from "react";
import "../styles/Contact.css";

function Contact(props) {
  const {
    firstNameText,
    lastNameText,
    emailText,
    phoneText,
    formSubmit,
  } = props.data;
  const handleInput = props.handleInput;
  return (
    <fieldset id="contact-container">
      <legend>Contact Information</legend>
      <div className="contact-line-div">
        <label htmlFor="firstNameText">First Name: </label>
        {formSubmit ? (
          <h4 className="firstNameLine">{firstNameText}</h4>
        ) : (
          <input
            type="text"
            name="firstNameText"
            className="firstNameInput"
            value={firstNameText}
            onChange={handleInput}
          />
        )}
      </div>
      <div className="contact-line-div">
        <label htmlFor="lastNameText">Last Name: </label>
        {formSubmit ? (
          <h4 className="lastNameLine">{lastNameText}</h4>
        ) : (
          <input
            type="text"
            name="lastNameText"
            value={lastNameText}
            className="lastNameInput"
            onChange={handleInput}
          />
        )}
      </div>
      <div className="contact-line-div">
        <label htmlFor="emailText">Email: </label>
        {formSubmit ? (
          <h4 className="emailLine">{emailText}</h4>
        ) : (
          <input
            type="email"
            name="emailText"
            value={emailText}
            className="emailInput"
            onChange={handleInput}
          />
        )}
      </div>
      <div className="contact-line-div">
        <label htmlFor="phoneText">Phone Number: </label>
        {formSubmit ? (
          <h4 className="phoneNumberLine">{phoneText}</h4>
        ) : (
          <input
            type="tel"
            name="phoneText"
            value={phoneText}
            className="phoneNumberInput"
            onChange={handleInput}
          />
        )}
      </div>
    </fieldset>
  );
}

export default Contact;
