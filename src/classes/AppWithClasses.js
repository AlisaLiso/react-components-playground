
import React, { Component } from 'react'

import Form from './Form';
import Message from './Message';
import Image from '../Image.svg';

export default class AppWithClasses extends Component {
  constructor() {
    super();
    this.state = {
      isFormValid: false
    }
  }

  handleFormValidation = (answer) => {
    this.setState({
      isFormValid: answer
    })
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <span>
            <h1>Sign In into your account</h1>
            <p className="primary">or start your 14-day free trial</p>
            <Form handleForm={(val) => this.handleFormValidation(val)} />
            <Message message={this.state.isFormValid ? "Correct" : "Incorrect"} />
          </span>
        </div>
        <div className="box" style={{
          backgroundImage: `url(${Image})`
        }}></div>
      </div>
    )
  }
}
