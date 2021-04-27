import React from "react";

function Education(props) {
  const {
    schoolNameText,
    schoolNameShow,
    studyTitleText,
    studyTitleShow,
    schoolStartingDateText,
    schoolStartingDateShow,
    schoolEndingDateText,
    schoolEndingDateShow,
  } = props.data;
  const handleInput = props.handleInput;
  const handleInputEdit = props.handleInputEdit;
  return (
    <div>
      <fieldset>
        <legend>Education</legend>
        <div>
          <label htmlFor="schoolNameText">School Name: </label>
          {schoolNameShow ? (
            <h4 display="none" className="schoolNameLine">
              {schoolNameText}
            </h4>
          ) : (
            <input
              type="text"
              name="schoolNameText"
              value={schoolNameText}
              onChange={handleInput}
              className="schoolNameInput"
            />
          )}
          {schoolNameShow ? (
            <button onClick={handleInputEdit} name="schoolNameShow">
              Edit
            </button>
          ) : (
            <button onClick={handleInputEdit} name="schoolNameShow">
              Submit
            </button>
          )}
        </div>
        <div>
          <label htmlFor="studyTitleText">Title: </label>
          {studyTitleShow ? (
            <h4 display="none" className="studyTitleLine">
              {studyTitleText}
            </h4>
          ) : (
            <input
              type="text"
              name="studyTitleText"
              value={studyTitleText}
              onChange={handleInput}
              className="studyTitleInput"
            />
          )}
          {studyTitleShow ? (
            <button onClick={handleInputEdit} name="studyTitleShow">
              Edit
            </button>
          ) : (
            <button onClick={handleInputEdit} name="studyTitleShow">
              Submit
            </button>
          )}
        </div>
        <div>
          <label htmlFor="schoolStartingDateText">Starting Date: </label>
          {schoolStartingDateShow ? (
            <h4 display="none" className="schoolStartingDateLine">
              {schoolStartingDateText}
            </h4>
          ) : (
            <input
              type="date"
              name="schoolStartingDateText"
              value={schoolStartingDateText}
              onChange={handleInput}
              className="schoolStartingDateInput"
            />
          )}
          {schoolStartingDateShow ? (
            <button onClick={handleInputEdit} name="schoolStartingDateShow">
              Edit
            </button>
          ) : (
            <button onClick={handleInputEdit} name="schoolStartingDateShow">
              Submit
            </button>
          )}
        </div>
        <div>
          <label htmlFor="schoolEndingDateText">Ending Date: </label>
          {schoolEndingDateShow ? (
            <h4 display="none" className="schoolEndingDateLine">
              {schoolEndingDateText}
            </h4>
          ) : (
            <input
              type="date"
              name="schoolEndingDateText"
              value={schoolEndingDateText}
              onChange={handleInput}
              className="schoolEndingDateInput"
            />
          )}
          {schoolEndingDateShow ? (
            <button onClick={handleInputEdit} name="schoolEndingDateShow">
              Edit
            </button>
          ) : (
            <button onClick={handleInputEdit} name="schoolEndingDateShow">
              Submit
            </button>
          )}
        </div>
        <button>Add Education</button>
      </fieldset>
    </div>
  );
}

export default Education;
