const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to allow requests from localhost:5173
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// Route handler to handle form submission
app.post('/send-email', (req, res) => {
  // Extract form data from request body
  const formData = req.body;

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'nagaraju.s1999@outlook.com',
      pass: 'Naga@1234'
    }
  });

  // Create email message
  const message = {
    from: 'nagaraju.s1999@outlook.com',
    to: 'manojgowdam74@gmail.com',
    subject: 'Form Submission',
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nContact: ${formData.contact}\nService Type: ${formData.serviceType}\nFrom: ${formData.from}\nTo: ${formData.to}\nKg: ${formData.kg}\nDimension: ${formData.dimension}\nDuration: ${formData.duration}`
  };

  // Send email
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.sendStatus(200);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
