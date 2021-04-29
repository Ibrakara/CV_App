import React from "react";
import "../styles/Experience.css";

function Experience(props) {
  const {
    companyNameText,
    jobPositionText,
    jobTitleText,
    workStartingDateText,
    workEndingDateText,
    experienceShow,
    experienceId,
  } = props.data;
  const handleExperienceInput = props.handleExperienceInput;
  const handleExperienceSubmit = props.handleExperienceSubmit;
  const deleteExperience = props.deleteExperience;
  return (
    <fieldset id="experience-container">
      <legend>Professional Experince</legend>
      <div className="experience-line-div">
        <label htmlFor="companyNameText">Company: </label>
        {experienceShow ? (
          <h4 display="none" className="companyNameLine">
            {companyNameText}
          </h4>
        ) : (
          <input
            type="text"
            name="companyNameText"
            value={companyNameText}
            data-id={experienceId}
            onChange={handleExperienceInput}
            className="companyNameInput"
          />
        )}
      </div>
      <div className="experience-line-div">
        <label htmlFor="jobPositionText">Position: </label>
        {experienceShow ? (
          <h4 display="none" className="jobPositionLine">
            {jobPositionText}
          </h4>
        ) : (
          <input
            type="text"
            name="jobPositionText"
            value={jobPositionText}
            data-id={experienceId}
            onChange={handleExperienceInput}
            className="jobPositionInput"
          />
        )}
      </div>
      <div className="experience-line-div">
        <label htmlFor="jobTitleText">Title: </label>
        {experienceShow ? (
          <h4 display="none" className="jobTitleLine">
            {jobTitleText}
          </h4>
        ) : (
          <input
            type="text"
            name="jobTitleText"
            value={jobTitleText}
            data-id={experienceId}
            onChange={handleExperienceInput}
            className="jobTitleInput"
          />
        )}
      </div>
      <div className="experience-line-div">
        <label htmlFor="workStartingDateText">Starting Date: </label>
        {experienceShow ? (
          <h4 display="none" className="workStartingDateLine">
            {workStartingDateText}
          </h4>
        ) : (
          <input
            type="date"
            name="workStartingDateText"
            value={workStartingDateText}
            data-id={experienceId}
            onChange={handleExperienceInput}
            className="workStartingDateInput"
          />
        )}
      </div>
      <div className="experience-line-div">
        <label htmlFor="workEndingDateText">Ending Date: </label>
        {experienceShow ? (
          <h4 display="none" className="workEndingDateLine">
            {workEndingDateText}
          </h4>
        ) : (
          <input
            type="date"
            name="workEndingDateText"
            value={workEndingDateText}
            data-id={experienceId}
            onChange={handleExperienceInput}
            className="workEndingDateInput"
          />
        )}
      </div>
      <button
        name="experienceShow"
        data-id={experienceId}
        onClick={handleExperienceSubmit}
        className="form-button"
      >
        {experienceShow ? "Edit" : "Submit"}
      </button>
      <button
        data-id={experienceId}
        onClick={deleteExperience}
        className="form-button"
      >
        Delete
      </button>
    </fieldset>
  );
}

export default Experience;
