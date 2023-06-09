import React, { Component } from 'react'
import './contact.css'
import ContactForm from './ContactForm';


export default class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      participate: '',
      Designation: '',
      course: '',
        number: null,

    }
}

submitHandler = (event) => {
    event.preventDefault();
    alert(`Name : ${this.state.participate}\nAuthor is : ${this.state.Author}\nEmail :${this.state.Email}\nCourse : ${this.state.course}\nMobile :${this.state.number} `);
}

changeHandler = (event) => {
  let nam = event.target.name;
  let number = event.target.value;

  if (nam === "number") {
      if (!Number(number)) {
          alert("Number should not be a character");
          return
      }
  }
  this.setState({ [nam]: number})
  
}


  render() {
    return (
      <div className='bg-light'>
      <div className="contact-container">
           
          <div className="col-lg-6">
            <ContactForm />
          </div>
          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.770356786728!2d77.51560167379478!3d12.922475987388404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e21c103985b%3A0x7af7b0258b8258fa!2sMatrical%20Technologies!5e0!3m2!1sen!2sin!4v1682603452282!5m2!1sen!2sin"
              width="70%"
              height="400px"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title='mapMT'
            />
            </div>

          
     
    </div>
   
    </div>
    
    )
  }
}