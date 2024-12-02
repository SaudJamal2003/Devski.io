const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
    try {
      // Update volunteer status in the database (pseudocode)
      console.log('--------------------------')
      console.log(req.body._email)
      console.log(req.body.foundationName)
      console.log(req.body.pickUp)
      console.log(req.body.dropOff)
      console.log(req.body.description)
      
      //connect with SMTP
      const transporter = nodemailer.createTransport({
          service: "gmail",
          auth:{
              // user: 'ova.bauch52@ethereal.email',
              // pass: 'GM4XPpCW3rPb5fJX9T'
              user: "k213964@nu.edu.pk",
              pass: YOUR_PASSWORD_HERE
          }
      });
  
      const mailOptions = {
        from: "k213964@nu.edu.pk",
        to: req.body._email,
        subject: `Task Assignment from ${req.body.foundationName} `,
        text: `Dear ${req.body.volName} the Description of the task assigned to you by us is as follows: \n
               ${req.body.description} \n\n Pick up Location:  ${req.body.pickUp} \n Drop Off Location:  ${req.body.dropOff}
               \n\n Regards. `
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).send('Email sent successfully.');
    } catch (error) {
      console.error('Error', error);
      res.status(500).send('Error in sending mail. Please try again later.');
    }
  });

module.exports = router;