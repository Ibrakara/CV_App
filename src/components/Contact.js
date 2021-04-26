import React from "react";

function Contact(props) {
  const { firstName, lastName, email, phone } = props.data;
  return (
    <div>
      <fieldset>
        <legend>Contact Information</legend>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" name="firstName" className="firstNameInput" />
          <p display="none" className="firstNameLine">
            {firstName.text}
          </p>
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" name="lastName" className="lastNameInput" />
          <p display="none" className="lastNameLine">
            {lastName.text}
          </p>
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" className="emailInput" />
          <p display="none" className="emailLine">
            {email.text}
          </p>
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input type="tel" name="phoneNumber" className="phoneNumberInput" />
          <p display="none" className="phoneNumberLine">
            {phone.text}
          </p>
          <button>Edit</button>
        </div>
      </fieldset>
    </div>
  );
}

export default Contact;
