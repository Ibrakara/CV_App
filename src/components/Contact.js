import React from "react";

function Contact(props) {
  const {
    firstNameText,
    firstNameShow,
    lastNameText,
    lastNameShow,
    emailText,
    emailShow,
    phoneText,
    phoneShow,
  } = props.data;
  const handleInput = props.handleInput;
  const handleInputEdit = props.handleInputEdit;
  return (
    <div>
      <fieldset>
        <legend>Contact Information</legend>
        <div>
          <label htmlFor="firstNameText">First Name: </label>
          {firstNameShow ? (
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
          {firstNameShow ? (
            <button onClick={handleInputEdit} name="firstNameShow">
              Edit
            </button>
          ) : (
            <button onClick={handleInputEdit} name="firstNameShow">
              Submit
            </button>
          )}
        </div>
        <div>
          <label htmlFor="lastNameText">Last Name: </label>
          {lastNameShow ? (
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
          {lastNameShow ? (
            <button onClick={handleInputEdit} name="lastNameShow">
              Edit
            </button>
          ) : (
            <button onClick={handleInputEdit} name="lastNameShow">
              Submit
            </button>
          )}
        </div>
        <div>
          <label htmlFor="emailText">Email: </label>
          {emailShow ? (
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
          {emailShow ? (
            <button onClick={handleInputEdit} name="emailShow">
              Edit
            </button>
          ) : (
            <button onClick={handleInputEdit} name="emailShow">
              Submit
            </button>
          )}
        </div>
        <div>
          <label htmlFor="phoneText">Phone Number: </label>
          {phoneShow ? (
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
          {phoneShow ? (
            <button onClick={handleInputEdit} name="phoneShow">
              Edit
            </button>
          ) : (
            <button onClick={handleInputEdit} name="phoneShow">
              Submit
            </button>
          )}
        </div>
      </fieldset>
    </div>
  );
}

export default Contact;
