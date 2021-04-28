import React from "react";
import Experience from "./Experience";
import Contact from "./Contact";
import Education from "./Education";

function Form(props) {
  const handleInput = props.handleInput;
  const handleFormSubmit = props.handleFormSubmit;
  const handleInputEdit = props.handleInputEdit;
  const handleEducationSubmit = props.handleEducationSubmit;
  const educations = props.data.educations;
  const formSubmit = props.data.formSubmit;
  const handleEducationInput = props.handleEducationInput;
  const addEducation = props.addEducation;
  const deleteEducation = props.deleteEducation;
  const educationList = educations.map((elem, index) => {
    return (
      <Education
        key={index}
        data={elem}
        handleInput={handleInput}
        handleInputEdit={handleInputEdit}
        handleEducationSubmit={handleEducationSubmit}
        handleEducationInput={handleEducationInput}
        deleteEducation={deleteEducation}
      />
    );
  });
  return (
    <div>
      <form>
        <Contact
          data={props.data}
          handleInput={handleInput}
          handleInputEdit={handleInputEdit}
        />
        {educationList}
        <button onClick={addEducation}>Add Education</button>
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
