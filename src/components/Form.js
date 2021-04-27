import React from "react";
import Experience from "./Experience";
import Contact from "./Contact";
import Education from "./Education";

function Form(props) {
  const handleInput = props.handleInput;
  const handleFormSubmit = props.handleFormSubmit;
  const formSubmit = props.data.formSubmit;
  const handleInputEdit = props.handleInputEdit;
  return (
    <div>
      <form>
        <Contact
          data={props.data}
          handleInput={handleInput}
          handleInputEdit={handleInputEdit}
        />
        <Education
          data={props.data}
          handleInput={handleInput}
          handleInputEdit={handleInputEdit}
        />
        <Experience
          data={props.data}
          handleInput={handleInput}
          handleInputEdit={handleInputEdit}
        />
        <button onClick={handleFormSubmit}>
          {formSubmit ? "Edit" : "Submit"}
        </button>
      </form>
    </div>
  );
}
export default Form;
