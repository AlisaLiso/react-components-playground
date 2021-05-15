import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      isNameVarified: false,
      isEmailVarified: false,
      isPhoneVarified: false,
      isURLVarified: false,
      firstname: '',
      email: '',
      tel: '',
      url: ''
    }
  }

  validateField = (name, value) => {
    switch (name) {
      case 'firstname':
        if (value.length > 0) {
          this.setState({
            isNameVarified: true
          })
        } else {
          this.setState({
            isNameVarified: false
          })
        }
        break;

      case 'email':
        if (value.length > 0 && value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
          this.setState({
            isEmailVarified: true
          })
        } else {
          this.setState({
            isEmailVarified: false
          })
        }
        break;

      case 'tel':
        if (value.length > 0 && value.match(/[0-9]/)) {
          this.setState({
            isPhoneVarified: true
          })
        } else {
          this.setState({
            isPhoneVarified: false
          })
        }
        break;

      case 'url':
        if (value.length > 0 && value.match(/(ftp|https|http):\/\/[A-z]+\.[A-z]{2,}/)) {
          this.setState({
            isURLVarified: true
          })
        } else {
          this.setState({
            isURLVarified: false
          })
        }
        break;
    }
  }

  handleChange = (event) => {
    const val = event.target.value;
    const inputName = event.target.name;

    this.setState({ [inputName]: val }, () => { this.validateField(inputName, val) });
  }

  onCheckFromValidation = () => {
    this.props.handleForm(this.state.isNameVarified && this.state.isEmailVarified && this.state.isPhoneVarified && this.state.isURLVarified)
  }

  render() {
    const { firstname, email, tel, url } = this.state;
    return (
      <form>
        <label htmlFor="name">
          <h3>Name</h3>
          <input onChange={this.handleChange} value={firstname} type="text" name="firstname" id="name" />
        </label>
        <label htmlFor="email">
          <h3>Email address</h3>
          <input onChange={this.handleChange} value={email} type="email" name="email" id="email" />
        </label>
        <label htmlFor="tel">
          <h3>Phone number</h3>
          <input onChange={this.handleChange} value={tel} type="tel" name="tel" id="tel" />
        </label>
        <label htmlFor="url">
          <h3>Blog URL</h3>
          <input onChange={this.handleChange} value={url} type="url" name="url" id="url" />
        </label>
        <div onClick={this.onCheckFromValidation} className="btn">
          <a href="#">Varify</a>
        </div>
      </form>
    )
  }
}
