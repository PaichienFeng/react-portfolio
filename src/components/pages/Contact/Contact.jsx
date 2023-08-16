import React, { useState } from 'react';
import css from '../Contact/Contact.module.scss';
import Button from '@mui/material/Button';

const initialData = {
  name: '',
  email: '',
  message: '',
}

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function Form() {

  const [inputData, setInputData] = useState(initialData);
  const [isValidEmailInput, setIsValidEmailInput] = useState(true);
  const [isValidMessage, setIsValidMessage] = useState(true);
  const [isValidName, setIsValidName] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputData(function (currentInputData) {
      return {
        ...currentInputData,
        [name]: value,
      };
    })

  };

  const handleBlur = (e)=>{
    const {name, value}= e.target 
    if(name === 'name' && !value.trim()){
      setIsValidName(false)
    }else{
      setIsValidName(true)
    };

    if(name==='email' && !isValidEmail(value)){
      setIsValidEmailInput(false)
    }else{
      setIsValidEmailInput(true)
    };

    if(name==='message' && !value.trim()){
      setIsValidMessage(false)
    }else{
      setIsValidMessage(true)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setInputData(initialData)
  };

  return (
    <div className={css.container}>
      <h2>
        Contact
      </h2>
      <form className="form">

        <div>
          <h4>Name</h4>    
          <input
          className={css.nameText}
          value={inputData.name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
        />
        </div>

        <div>
          <h4>Email Address</h4>
          <input
          className={css.emailText}
          value={inputData.email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
        /></div>

        <div>
          <h4>Message</h4>
          <textarea
          className={css.messageText}
          value={inputData.message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
        /></div>
        {!isValidEmailInput && <p>Please enter a valid email address</p>}
        {!isValidMessage && <p>Message is required</p>}
        {!isValidName && <p>Name is required</p>}
        <div> 
          <Button className={css.button} variant="contained" onClick={handleFormSubmit}>
          Submit
        </Button>
        </div>

      </form>
    </div>
  );
}

export default Form;