import React, { Component } from "react";
import Form from "./components/Form";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: uniqid(),
      firstNameText: "",
      lastNameText: "",
      emailText: "",
      phoneText: "",
      formSubmit: false,
      educations: [
        {
          schoolNameText: "",
          studyTitleText: "",
          schoolStartingDateText: "",
          schoolEndingDateText: "",
          educationId: uniqid(),
          educationShow: false,
        },
      ],
      experiences: [
        {
          companyNameText: "",
          jobPositionText: "",
          jobTitleText: "",
          workStartingDateText: "",
          workEndingDateText: "",
          experienceId: uniqid(),
          experienceShow: false,
        },
      ],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    this.handleEducationInput = this.handleEducationInput.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.handleExperienceInput = this.handleExperienceInput.bind(this);
    this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }
  handleInput(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleExperienceInput(event) {
    event.preventDefault();
    const { name, value, dataset } = event.target;
    const newExperinces = this.state.experiences.map((elem) => {
      if (elem.experienceId === dataset.id) {
        elem[name] = value;
      }
      return elem;
    });
    this.setState({
      experiences: newExperinces,
    });
  }
  handleExperienceSubmit(event) {
    event.preventDefault();
    const { name, dataset } = event.target;
    const newExperiences = this.state.experiences.map((elem, index) => {
      if (elem.experienceId === dataset.id) {
        elem[name] = !this.state.experiences[index].experienceShow;
      }
      return elem;
    });
    this.setState({
      experiences: newExperiences,
    });
  }
  addExperience(event) {
    event.preventDefault();
    this.setState({
      experiences: [
        ...this.state.experiences,
        {
          companyNameText: "",
          jobPositionText: "",
          jobTitleText: "",
          workStartingDateText: "",
          workEndingDateText: "",
          experienceId: uniqid(),
          experienceShow: false,
        },
      ],
    });
  }
  deleteExperience(event) {
    event.preventDefault();
    const { dataset } = event.target;
    const newExperinces = this.state.experiences.filter((elem) => {
      return elem.experienceId !== dataset.id;
    });
    this.setState({
      experiences: newExperinces,
    });
  }
  addEducation(event) {
    event.preventDefault();
    this.setState({
      educations: [
        ...this.state.educations,
        {
          schoolNameText: "",
          studyTitleText: "",
          schoolStartingDateText: "",
          schoolEndingDateText: "",
          educationId: uniqid(),
          educationShow: false,
        },
      ],
    });
  }
  handleEducationInput(event) {
    event.preventDefault();
    const { name, value, dataset } = event.target;
    const newEducations = this.state.educations.map((elem) => {
      if (elem.educationId === dataset.id) {
        elem[name] = value;
      }
      return elem;
    });
    this.setState({
      educations: newEducations,
    });
  }
  handleEducationSubmit(event) {
    event.preventDefault();
    const { name, dataset } = event.target;
    const newEducations = this.state.educations.map((elem, index) => {
      if (elem.educationId === dataset.id) {
        elem[name] = !this.state.educations[index].educationShow;
      }
      return elem;
    });
    this.setState({
      educations: newEducations,
    });
  }
  deleteEducation(event) {
    event.preventDefault();
    const { dataset } = event.target;
    const newEducations = this.state.educations.filter((elem) => {
      return elem.educationId !== dataset.id;
    });
    this.setState({
      educations: newEducations,
    });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    const newEducations = this.state.educations.map((elem) => {
      if (this.state.formSubmit === false) {
        elem.educationShow = true;
      } else if (this.state.formSubmit === true) {
        elem.educationShow = false;
      }
      return elem;
    });
    const newExperiences = this.state.experiences.map((elem) => {
      if (this.state.formSubmit === false) {
        elem.experienceShow = true;
      } else if (this.state.formSubmit === true) {
        elem.experienceShow = false;
      }
      return elem;
    });
    this.setState({
      formSubmit: !this.state.formSubmit,
      educations: newEducations,
      experiences: newExperiences,
    });
  }
  render() {
    return (
      <div className="App">
        <Form
          data={this.state}
          handleInput={this.handleInput}
          handleFormSubmit={this.handleFormSubmit}
          handleEducationSubmit={this.handleEducationSubmit}
          handleEducationInput={this.handleEducationInput}
          addEducation={this.addEducation}
          deleteEducation={this.deleteEducation}
          handleExperienceInput={this.handleExperienceInput}
          handleExperienceSubmit={this.handleExperienceSubmit}
          addExperience={this.addExperience}
          deleteExperience={this.deleteExperience}
        />
      </div>
    );
  }
}

export default App;
