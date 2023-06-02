import React, { Component } from 'react'
import './contact.css'


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
    alert(`Name : ${this.state.participate}\nDesignation is : ${this.state.Designation}\nCourse : ${this.state.course}\nMobile :${this.state.number} `);
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
      <div>
      <div className="contact-container">
      <form action="#" method="POST" className="contact-form" onSubmit={this.submitHandler}>
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="participate" placeholder="Enter Your Name" required onChange={this.changeHandler}/>
              </div>

              <div className="form-group">
                <label htmlFor="Designation">Designation:</label>
                <input type="text" id="Designation" name="Designation" placeholder="Enter Your Designatioin" required onChange={this.changeHandler}/>
              </div>

              <div className="form-group">
                <label htmlFor="course">Course:</label>
                <input type="text" id="course" name="course" placeholder="Enter Your Course" required onChange={this.changeHandler}/>
              </div>

              <div className="form-group">
                <label htmlFor="number">Mobile:</label>
                <input type="text" id="number" name="number" placeholder="Enter Your Mobile Nubmer" required onChange={this.changeHandler}/>
              </div>

              <button className='btn btn-success' type="submit">Submit</button>
            </form>
          
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
    
    )
  }
}