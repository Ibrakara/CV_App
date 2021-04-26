import React from "react";

function Experience(props) {
  return (
    <div>
      <fieldset>
        <legend>Professional Experince</legend>
        <div>
          <label htmlFor="companyName">Company: </label>
          <input type="text" name="companyName" className="companyNameInput" />
          <p display="none" className="companyNameLine"></p>
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor="jobPosition">Position: </label>
          <input type="text" name="jobPosition" className="jobPositionInput" />
          <p display="none" className="jobPositionLine"></p>
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor="jobTitle">Title: </label>
          <input type="text" name="jobTitle" className="jobTitleInput" />
          <p display="none" className="jobTitleLine"></p>
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor="workStartingDate">Starting Date: </label>
          <input
            type="date"
            name="workStartingDate"
            className="workStartingDateInput"
          />
          <p display="none" className="workStartingDateLine"></p>
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor="workEndingDate">Ending Date: </label>
          <input
            type="date"
            name="workEndingDate"
            className="workEndingDateInput"
          />
          <p display="none" className="workEndingDateLine"></p>
          <button>Edit</button>
        </div>
        <button>Add Experince</button>
      </fieldset>
    </div>
  );
}

export default Experience;
