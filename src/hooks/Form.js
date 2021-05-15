import React, { useState, useCallback } from 'react';

const Form = ({ handleForm }) => {
  const [isValuesValid, setIsValuesValid] = useState({
    firstname: false,
    email: false,
    tel: false,
    url: false,
  });

  const [values, setValues] = useState({
    firstname: '',
    email: '',
    tel: '',
    url: '',
  });

  const validation = (name, value) => {
    switch (name) {
      case 'firstname':
        setIsValuesValid((prev) => {
          return {
            ...prev,
            [name]: value.length > 0
          }
        })
        break;

      case 'email':
        setIsValuesValid((prev) => {
          return {
            ...prev,
            [name]: value.length > 0 && value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?.length > 0
          }
        })
        break;

      case 'tel':
        setIsValuesValid((prev) => {
          return {
            ...prev,
            [name]: value.length > 0 && value.match(/[0-9]/)?.length > 0
          }
        })
        break;

      case 'url':
        setIsValuesValid((prev) => {
          return {
            ...prev,
            [name]: value.length > 0 && value.match(/(ftp|https|http):\/\/[A-z]+\.[A-z]{2,}/)?.length > 0
          }
        })
        break;
    }
  }

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setValues((prev) => {
      validation(name, value);
      return {
        ...prev,
        [name]: value
      }
    })
  };

  const onCheckFromValidation = () => {
    console.log(isValuesValid.firstname, isValuesValid.email, isValuesValid.tel, isValuesValid.url)
    handleForm(isValuesValid.firstname && isValuesValid.email && isValuesValid.tel && isValuesValid.url)
  }

  return (
    <form>
      <label htmlFor="name">
        <h3>Name</h3>
        <input onChange={handleChange} value={values.firstname} type="text" name="firstname" id="name" />
      </label>
      <label htmlFor="email">
        <h3>Email address</h3>
        <input onChange={handleChange} value={values.email} type="email" name="email" id="email" />
      </label>
      <label htmlFor="tel">
        <h3>Phone number</h3>
        <input onChange={handleChange} value={values.tel} type="tel" name="tel" id="tel" />
      </label>
      <label htmlFor="url">
        <h3>Blog URL</h3>
        <input onChange={handleChange} value={values.url} type="url" name="url" id="url" />
      </label>
      <div onClick={onCheckFromValidation} className="btn">
        <a href="#">Varify</a>
      </div>
    </form>
  )
}

export default Form;
