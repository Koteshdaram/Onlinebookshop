import React, { useState } from "react";
import './contact.css'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name,author,course, email,mobile, message } = e.target.elements;
    let details = {
      name: name.value,
      author:author.value,
      course:course.value,
      email:email.value,
      mobile:mobile.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert("Your Message has been sent Successfully");
    // alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit} className="contact-form-sec">
      <h1 className="text-center text-white">Contact Form</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author:</label>
        <input type="author" id="author" required />
      </div>
      <div className="form-group">
        <label htmlFor="course">Course:</label>
        <input type="course" id="course" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile:</label>
        <input type="mobile" id="mobile" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;
