import React, { useState } from 'react';
import Form from './Form';
import Message from './Message';
import Image from '../Image.svg';

const AppWithHooks = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormValidation = (value) => {
    setIsFormValid(value)
  }

  return (
    <div className="container">
      <div className="content">
        <span>
          <h1>Sign In into your account</h1>
          <p className="primary">or start your 14-day free trial</p>
          <Form handleForm={(val) => handleFormValidation(val)} />
          <Message message={isFormValid ? "Correct" : "Incorrect"} />
        </span>
      </div>
      <div className="box" style={{
        backgroundImage: `url(${Image})`
      }}></div>
    </div>
  )
}

export default AppWithHooks
