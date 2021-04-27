import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstNameText: "",
      firstNameShow: false,
      lastNameText: "",
      lastNameShow: false,
      emailText: "",
      emailShow: false,
      phoneText: "",
      phoneShow: false,
      schoolNameText: "",
      schoolNameShow: false,
      studyTitleText: "",
      studyTitleShow: false,
      schoolStartingDateText: "",
      schoolStartingDateShow: false,
      schoolEndingDateText: "",
      schoolEndingDateShow: false,
      companyNameText: "",
      companyNameShow: false,
      jobPositionText: "",
      jobPositionShow: false,
      jobTitleText: "",
      jobTitleShow: false,
      workStartingDateText: "",
      workStartingDateShow: false,
      workEndingDateText: "",
      workEndingDateShow: false,
      formSubmit: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputEdit = this.handleInputEdit.bind(this);
  }
  handleInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        firstNameShow: !prevState.formSubmit,
        lastNameShow: !prevState.formSubmit,
        emailShow: !prevState.formSubmit,
        phoneShow: !prevState.formSubmit,
        schoolNameShow: !prevState.formSubmit,
        studyTitleShow: !prevState.formSubmit,
        schoolStartingDateShow: !prevState.formSubmit,
        schoolEndingDateShow: !prevState.formSubmit,
        companyNameShow: !prevState.formSubmit,
        jobPositionShow: !prevState.formSubmit,
        jobTitleShow: !prevState.formSubmit,
        workStartingDateShow: !prevState.formSubmit,
        workEndingDateShow: !prevState.formSubmit,
        formSubmit: !prevState.formSubmit,
      };
    });
  }
  handleInputEdit(event) {
    event.preventDefault();
    const { name } = event.target;
    console.log(name);
    this.setState((prevState) => {
      return {
        [name]: !prevState[name],
      };
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
        />
      </div>
    );
  }
}

export default App;
