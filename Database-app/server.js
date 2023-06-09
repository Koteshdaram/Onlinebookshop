const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
const contactEmail = nodemailer.createTransport({
    host: 'smtp.ethereal.email', 
    port:587,
    auth: {
      user: "felton.flatley60@ethereal.email",
      pass: "",
      pass: "cxm83Cs1ZgMSbfngKT",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const author = req.body.author;
    const course = req.body.course;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "koteshdaram735@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Author: ${author}</p>
             <p>Course: ${course}</p>
             <p>Email: ${email}</p>
             <p>mobile: ${mobile}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });
  