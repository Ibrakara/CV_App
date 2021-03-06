import React from "react";
import "../styles/Education.css";

function Education(props) {
  const {
    schoolNameText,
    studyTitleText,
    schoolStartingDateText,
    schoolEndingDateText,
    educationShow,
    educationId,
  } = props.data;
  const handleEducationSubmit = props.handleEducationSubmit;
  const handleEducationInput = props.handleEducationInput;
  const deleteEducation = props.deleteEducation;
  return (
    <fieldset id="education-container">
      <legend>Education</legend>
      <div className="education-line-div">
        <label htmlFor="schoolNameText">School Name: </label>
        {educationShow ? (
          <h4 className="schoolNameLine">{schoolNameText}</h4>
        ) : (
          <input
            type="text"
            name="schoolNameText"
            value={schoolNameText}
            onChange={handleEducationInput}
            data-id={educationId}
            className="schoolNameInput"
          />
        )}
      </div>
      <div className="education-line-div">
        <label htmlFor="studyTitleText">Title: </label>
        {educationShow ? (
          <h4 className="studyTitleLine">{studyTitleText}</h4>
        ) : (
          <input
            type="text"
            name="studyTitleText"
            value={studyTitleText}
            onChange={handleEducationInput}
            data-id={educationId}
            className="studyTitleInput"
          />
        )}
      </div>
      <div className="education-line-div">
        <label htmlFor="schoolStartingDateText">Starting Date: </label>
        {educationShow ? (
          <h4 className="schoolStartingDateLine">{schoolStartingDateText}</h4>
        ) : (
          <input
            type="date"
            name="schoolStartingDateText"
            value={schoolStartingDateText}
            onChange={handleEducationInput}
            data-id={educationId}
            className="schoolStartingDateInput"
          />
        )}
      </div>
      <div className="education-line-div">
        <label htmlFor="schoolEndingDateText">Ending Date: </label>
        {educationShow ? (
          <h4 className="schoolEndingDateLine">{schoolEndingDateText}</h4>
        ) : (
          <input
            type="date"
            name="schoolEndingDateText"
            value={schoolEndingDateText}
            onChange={handleEducationInput}
            data-id={educationId}
            className="schoolEndingDateInput"
          />
        )}
      </div>
      <button
        name="educationShow"
        data-id={educationId}
        onClick={handleEducationSubmit}
        className="form-button"
      >
        {educationShow ? "Edit" : "Submit"}
      </button>
      <button
        data-id={educationId}
        onClick={deleteEducation}
        className="form-button"
      >
        Delete
      </button>
    </fieldset>
  );
}

export default Education;
