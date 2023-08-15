import React, { useState } from 'react';
import css from '../Contact/Contact.module.scss';

const initialData = {
  email: '',
  lastName: '',
  firstName: '',
}

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');

  // const handler = {
  //   email: setEmail,
  //   firstName: setFirstName,
  //   lastName: setLastName,
  // }

  const [inputData, setInputData] = useState(initialData)


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    
    setInputData(function (currentInputData) {
      return {
        ...currentInputData,
        [name]: value,
      };
    })
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs

    setInputData(initialData)
    
    // setFirstName('');
    // setLastName('');
  };

  return (
    <div>
      <p>
        Hello {inputData.firstName} {inputData.lastName} -- {inputData.email}
      </p>
      <form className="form">
        <input
          value={inputData.firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={inputData.lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />

        <input
          value={inputData.email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />

        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;