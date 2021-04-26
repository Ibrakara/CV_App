import React from "react";
import Experience from "./Experience";
import Contact from "./Contact";
import Education from "./Education";

function Form(props) {
  const contactData = props.data.contact;
  const educationData = props.data.education;
  const experinceData = props.data.experince;
  const handleInput = props.handleInput;
  return (
    <div>
      <form>
        <Contact data={contactData} handleInput={handleInput} />
        <Education data={educationData} handleInput={handleInput} />
        <Experience data={experinceData} handleInput={handleInput} />
      </form>
    </div>
  );
}
export default Form;
