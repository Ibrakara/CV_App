import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import "./styles/App.css";
import uniqid from "uniqid";

const App = () => {
  const contactObj = {
    id: uniqid(),
    firstNameText: "",
    lastNameText: "",
    emailText: "",
    phoneText: "",
    formSubmit: false,
  };
  const [contact, setContact] = useState(contactObj);
  const educationArr = [
    {
      schoolNameText: "",
      studyTitleText: "",
      schoolStartingDateText: "",
      schoolEndingDateText: "",
      educationId: uniqid(),
      educationShow: false,
    },
  ];
  const [educations, setEducations] = useState(educationArr);
  const experiencesArr = [
    {
      companyNameText: "",
      jobPositionText: "",
      jobTitleText: "",
      workStartingDateText: "",
      workEndingDateText: "",
      experienceId: uniqid(),
      experienceShow: false,
    },
  ];
  const [experiences, setExperiences] = useState(experiencesArr);
  const handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };
  const handleExperienceInput = (event) => {
    event.preventDefault();
    const { name, value, dataset } = event.target;
    const newExperinces = experiences.map((elem) => {
      if (elem.experienceId === dataset.id) {
        elem[name] = value;
      }
      return elem;
    });
    setExperiences(newExperinces);
  };
  const handleExperienceSubmit = (event) => {
    event.preventDefault();
    const { name, dataset } = event.target;
    const newExperiences = experiences.map((elem, index) => {
      if (elem.experienceId === dataset.id) {
        elem[name] = !experiences[index].experienceShow;
      }
      return elem;
    });
    setExperiences(newExperiences);
  };
  const addExperience = (event) => {
    event.preventDefault();
    setExperiences([
      ...experiences,
      {
        companyNameText: "",
        jobPositionText: "",
        jobTitleText: "",
        workStartingDateText: "",
        workEndingDateText: "",
        experienceId: uniqid(),
        experienceShow: false,
      },
    ]);
  };
  const deleteExperience = (event) => {
    event.preventDefault();
    const { dataset } = event.target;
    const newExperinces = experiences.filter((elem) => {
      return elem.experienceId !== dataset.id;
    });
    setExperiences(newExperinces);
  };
  const addEducation = (event) => {
    event.preventDefault();
    this.setEducations([
      educations,
      {
        schoolNameText: "",
        studyTitleText: "",
        schoolStartingDateText: "",
        schoolEndingDateText: "",
        educationId: uniqid(),
        educationShow: false,
      },
    ]);
  };
  const handleEducationInput = (event) => {
    event.preventDefault();
    const { name, value, dataset } = event.target;
    const newEducations = educations.map((elem) => {
      if (elem.educationId === dataset.id) {
        elem[name] = value;
      }
      return elem;
    });
    setEducations(newEducations);
  };
  const handleEducationSubmit = (event) => {
    event.preventDefault();
    const { name, dataset } = event.target;
    const newEducations = educations.map((elem, index) => {
      if (elem.educationId === dataset.id) {
        elem[name] = !educations[index].educationShow;
      }
      return elem;
    });
    setEducations(newEducations);
  };
  const deleteEducation = (event) => {
    event.preventDefault();
    const { dataset } = event.target;
    const newEducations = educations.filter((elem) => {
      return elem.educationId !== dataset.id;
    });
    this.setState(newEducations);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newEducations = educations.map((elem) => {
      if (contact.formSubmit === false) {
        elem.educationShow = true;
      } else if (contact.formSubmit === true) {
        elem.educationShow = false;
      }
      return elem;
    });
    const newExperiences = experiences.map((elem) => {
      if (contact.formSubmit === false) {
        elem.experienceShow = true;
      } else if (contact.formSubmit === true) {
        elem.experienceShow = false;
      }
      return elem;
    });
    setContact({ ...contact, formSubmit: !contact.formSubmit });
    setEducations(newEducations);
    setExperiences(newExperiences);
  };
  return (
    <div className="App">
      <Header />
      <Form
        contactData={contact}
        educationsData={educations}
        experiencesData={experiences}
        handleInput={handleInput}
        handleExperienceInput={handleExperienceInput}
        handleExperienceSubmit={handleExperienceSubmit}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
        addEducation={addEducation}
        handleEducationInput={handleEducationInput}
        handleEducationSubmit={handleEducationSubmit}
        deleteEducation={deleteEducation}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       id: uniqid(),
//       firstNameText: "",
//       lastNameText: "",
//       emailText: "",
//       phoneText: "",
//       formSubmit: false,
//       educations: [
//         {
//           schoolNameText: "",
//           studyTitleText: "",
//           schoolStartingDateText: "",
//           schoolEndingDateText: "",
//           educationId: uniqid(),
//           educationShow: false,
//         },
//       ],
//       experiences: [
//         {
//           companyNameText: "",
//           jobPositionText: "",
//           jobTitleText: "",
//           workStartingDateText: "",
//           workEndingDateText: "",
//           experienceId: uniqid(),
//           experienceShow: false,
//         },
//       ],
//     };
//     this.handleInput = this.handleInput.bind(this);
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
//     this.handleEducationInput = this.handleEducationInput.bind(this);
//     this.addEducation = this.addEducation.bind(this);
//     this.deleteEducation = this.deleteEducation.bind(this);
//     this.handleExperienceInput = this.handleExperienceInput.bind(this);
//     this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);
//     this.addExperience = this.addExperience.bind(this);
//     this.deleteExperience = this.deleteExperience.bind(this);
//   }
//

//
//
//
//
//
//
//
//
//
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Form
//           data={this.state}
//           handleInput={this.handleInput}
//           handleFormSubmit={this.handleFormSubmit}
//           handleEducationSubmit={this.handleEducationSubmit}
//           handleEducationInput={this.handleEducationInput}
//           addEducation={this.addEducation}
//           deleteEducation={this.deleteEducation}
//           handleExperienceInput={this.handleExperienceInput}
//           handleExperienceSubmit={this.handleExperienceSubmit}
//           addExperience={this.addExperience}
//           deleteExperience={this.deleteExperience}
//         />
//       </div>
//     );
//   }
// }

export default App;
