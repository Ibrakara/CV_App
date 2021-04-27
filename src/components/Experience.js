import React from "react";

function Experience(props) {
  const {
    companyNameText,
    companyNameShow,
    jobPositionText,
    jobPositionShow,
    jobTitleText,
    jobTitleShow,
    workStartingDateText,
    workStartingDateShow,
    workEndingDateText,
    workEndingDateShow,
  } = props.data;
  const handleInput = props.handleInput;
  const handleInputEdit = props.handleInputEdit;
  return (
    <div>
      <fieldset>
        <legend>Professional Experince</legend>
        <div>
          <label htmlFor="companyNameText">Company: </label>
          {companyNameShow ? (
            <h4 display="none" className="companyNameLine">
              {companyNameText}{" "}
            </h4>
          ) : (
            <input
              type="text"
              name="companyNameText"
              value={companyNameText}
              onChange={handleInput}
              className="companyNameInput"
            />
          )}
          {companyNameShow ? (
            <button onClick={handleInputEdit} name="companyNameShow">
              Edit
            </button>
          ) : (
            <button onClick={handleInputEdit} name="companyNameShow">
              Submit
            </button>
          )}
        </div>
        <div>
          <label htmlFor="jobPositionText">Position: </label>
          {jobPositionShow ? (
            <h4 display="none" className="jobPositionLine">
              {jobPositionText}
            </h4>
          ) : (
            <input
              type="text"
              name="jobPositionText"
              value={jobPositionText}
              onChange={handleInput}
              className="jobPositionInput"
            />
          )}
          {jobPositionShow ? (
            <button onClick={handleInputEdit} name="jobPositionShow">
              Edit
            </button>
          ) : (
            <button onClick={handleInputEdit} name="jobPositionShow">
              Submit
            </button>
          )}
        </div>
        <div>
          <label htmlFor="jobTitleText">Title: </label>
          {jobTitleShow ? (
            <h4 display="none" className="jobTitleLine">
              {jobTitleText}
            </h4>
          ) : (
            <input
              type="text"
              name="jobTitleText"
              value={jobTitleText}
              onChange={handleInput}
              className="jobTitleInput"
            />
          )}
          {jobTitleShow ? (
            <button onClick={handleInputEdit} name="jobTitleShow">
              Edit
            </button>
          ) : (
            <button onClick={handleInputEdit} name="jobTitleShow">
              Submit
            </button>
          )}
        </div>
        <div>
          <label htmlFor="workStartingDateText">Starting Date: </label>
          {workStartingDateShow ? (
            <h4 display="none" className="workStartingDateLine">
              {workStartingDateText}
            </h4>
          ) : (
            <input
              type="date"
              name="workStartingDateText"
              value={workStartingDateText}
              onChange={handleInput}
              className="workStartingDateInput"
            />
          )}
          {workStartingDateShow ? (
            <button onClick={handleInputEdit} name="workStartingDateShow">
              Edit
            </button>
          ) : (
            <button onClick={handleInputEdit} name="workStartingDateShow">
              Submit
            </button>
          )}
        </div>
        <div>
          <label htmlFor="workEndingDateText">Ending Date: </label>
          {workEndingDateShow ? (
            <h4 display="none" className="workEndingDateLine">
              {workEndingDateText}
            </h4>
          ) : (
            <input
              type="date"
              name="workEndingDateText"
              value={workEndingDateText}
              onChange={handleInput}
              className="workEndingDateInput"
            />
          )}
          {workEndingDateShow ? (
            <button onClick={handleInputEdit} name="workEndingDateShow">
              Edit
            </button>
          ) : (
            <button onClick={handleInputEdit} name="workEndingDateShow">
              Submit
            </button>
          )}
        </div>
        <button>Add Experince</button>
      </fieldset>
    </div>
  );
}

export default Experience;
