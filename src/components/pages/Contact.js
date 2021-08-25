import React from 'react';

function Contact() {
  return (
    <main className="container">
      <h1>
        Contact
      </h1>
      <form>
      <div class="form-group my-2">
          <label for="name" class="my-1">Name:</label>
          <input type="text" class="form-control" id="name" placeholder="name" />
        </div>
        <div class="form-group my-2">
          <label for="email" class="my-1">Email address:</label>
          <input type="email" class="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div class="form-group my-2">
          <label for="message" class="my-1">Message:</label>
          <textarea class="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </main>
  )
}

export default Contact;