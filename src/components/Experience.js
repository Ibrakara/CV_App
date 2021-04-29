import React from "react";

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
    <div>
      <fieldset>
        <legend>Professional Experince</legend>
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        >
          {experienceShow ? "Edit" : "Submit"}
        </button>
        <button data-id={experienceId} onClick={deleteExperience}>
          Delete
        </button>
      </fieldset>
    </div>
  );
}

export default Experience;
