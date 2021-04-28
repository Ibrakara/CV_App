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
        },
      ],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputEdit = this.handleInputEdit.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    this.handleEducationInput = this.handleEducationInput.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }
  handleInput(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
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
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({
      formSubmit: !this.state.formSubmit,
    });
  }
  handleInputEdit(event) {
    event.preventDefault();
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
    console.log(newEducations);
    this.setState({
      educations: newEducations,
    });
  }
  render() {
    return (
      <div className="App">
        <Form
          data={this.state}
          handleInput={this.handleInput}
          handleFormSubmit={this.handleFormSubmit}
          handleInputEdit={this.handleInputEdit}
          handleEducationSubmit={this.handleEducationSubmit}
          handleEducationInput={this.handleEducationInput}
          addEducation={this.addEducation}
          deleteEducation={this.deleteEducation}
        />
      </div>
    );
  }
}

export default App;
