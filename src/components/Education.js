import React from "react";

function Education(props) {
  return (
    <div>
      <fieldset>
        <legend>Education</legend>
        <div>
          <label htmlFor="schoolName">School Name: </label>
          <input type="text" name="schoolName" className="schoolNameInput" />
          <p display="none" className="schoolNameLine"></p>
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor="studyTitle">Title: </label>
          <input type="text" name="studyTitle" className="studyTitleInput" />
          <p display="none" className="studyTitleLine"></p>
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor="schoolStartingDate">Starting Date: </label>
          <input
            type="date"
            name="schoolStartingDate"
            className="schoolStartingDateInput"
          />
          <p display="none" className="schoolStartingDateLine"></p>
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor="schoolEndingDate">Ending Date: </label>
          <input
            type="date"
            name="schoolEndingDate"
            className="schoolEndingDateInput"
          />
          <p display="none" className="schoolEndingDateLine"></p>
          <button>Edit</button>
        </div>
        <button>Add Education</button>
      </fieldset>
    </div>
  );
}

export default Education;
