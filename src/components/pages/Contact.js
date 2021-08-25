import React, { useState } from 'react';
import { validateEmail, validateInput } from '../../utils/helpers';

function Contact() {
  const [viewerName, setViewerName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOnChange = (e) => {
    // Getting the name, email and message of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'viewerName') {
      setViewerName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleOnBlur = (e) => {
    // Getting the name, email and message of the input which triggered the change
    const { target } = e;
    const inputType = target.name;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email' && !validateEmail(email)) {
      setErrorMessage('Sorry, you entered an invalid email');
    } else if (inputType === 'viewerName' && !validateInput(viewerName)) {
      setErrorMessage('Sorry, a valid name is required');
    } else if (inputType === 'message' && !validateInput(message)){
      setErrorMessage('Sorry, a valid message is required');
    } else {
      setErrorMessage('');
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    if (errorMessage === '') {
      setViewerName('');
      setEmail('');
      setMessage('');
    }
  };
  return (
    <main className="container">
      <h1>
        Contact
      </h1>
      <form>
      <div className="form-group my-2">
          <label htmlFor="viewerName" className="my-1">Name:</label>
          <input value={viewerName} name="viewerName" onBlur={handleOnBlur} onChange={handleOnChange} type="text" className="form-control" id="viewerName" placeholder="name" />
        </div>
        <div className="form-group my-2">
          <label htmlFor="email" className="my-1">Email address:</label>
          <input value={email} name="email" onBlur={handleOnBlur} onChange={handleOnChange} type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div className="form-group my-2">
          <label htmlFor="message" className="my-1">Message:</label>
          <textarea value={message} name="message" onBlur={handleOnBlur} onChange={handleOnChange} className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" onClick={handleFormSubmit} className="btn btn-primary">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </main>
  )
}

export default Contact;