import React from "react";
import Experience from "./Experience";
import Contact from "./Contact";
import Education from "./Education";

function Form(props) {
  const handleInput = props.handleInput;
  const handleFormSubmit = props.handleFormSubmit;
  const handleEducationSubmit = props.handleEducationSubmit;
  const handleEducationInput = props.handleEducationInput;
  const deleteEducation = props.deleteEducation;
  const addEducation = props.addEducation;
  const handleExperienceInput = props.handleExperienceInput;
  const handleExperienceSubmit = props.handleExperienceSubmit;
  const addExperience = props.addExperience;
  const deleteExperience = props.deleteExperience;
  const formSubmit = props.data.formSubmit;
  const educations = props.data.educations;
  const experiences = props.data.experiences;
  const educationList = educations.map((elem, index) => {
    return (
      <Education
        key={index}
        data={elem}
        handleEducationInput={handleEducationInput}
        handleEducationSubmit={handleEducationSubmit}
        deleteEducation={deleteEducation}
      />
    );
  });
  const experienceList = experiences.map((elem, index) => {
    return (
      <Experience
        key={index}
        data={elem}
        handleExperienceInput={handleExperienceInput}
        handleExperienceSubmit={handleExperienceSubmit}
        deleteExperience={deleteExperience}
      />
    );
  });
  return (
    <div>
      <form>
        <Contact data={props.data} handleInput={handleInput} />
        {educationList}
        <button onClick={addEducation}>Add Education</button>
        {experienceList}
        <button onClick={addExperience}>Add Experince</button>
        <br />
        <button onClick={handleFormSubmit}>
          {formSubmit ? "Edit" : "Submit"}
        </button>
      </form>
    </div>
  );
}
export default Form;
