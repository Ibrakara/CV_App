import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contact: {
        firstName: {
          text: "",
          show: false,
        },
        lastName: {
          text: "",
          show: false,
        },
        email: {
          text: "",
          show: false,
        },
        phone: {
          text: "",
          show: false,
        },
      },
      education: {
        schoolName: {
          text: "",
          show: false,
        },
        studyTitle: {
          text: "",
          show: false,
        },
        schoolStartingDate: {
          text: "",
          show: false,
        },
        schoolEndingDate: {
          text: "",
          show: false,
        },
      },
      experince: {
        companyName: {
          text: "",
          show: false,
        },
        jobPosition: {
          text: "",
          show: false,
        },
        jobTitle: {
          text: "",
          show: false,
        },
        workStartingDate: {
          text: "",
          show: false,
        },
        workEndingDate: {
          text: "",
          show: false,
        },
      },
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput() {}
  render() {
    return (
      <div className="App">
        <Form data={this.state} handleInput={this.handleInput} />
      </div>
    );
  }
}

export default App;
