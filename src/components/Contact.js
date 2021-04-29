import React from "react";

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
    <div>
      <fieldset>
        <legend>Contact Information</legend>
        <div>
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
        <div>
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
        <div>
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
        <div>
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
    </div>
  );
}

export default Contact;
