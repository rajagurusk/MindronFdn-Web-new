const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Temporary in-memory storage for subscribed emails
const subscribers = [];

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Express server running!');
});

// Route to handle email subscription
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  // Avoid duplicate emails
  if (!subscribers.includes(email)) {
    subscribers.push(email);  // Save email temporarily
  }
  res.status(200).json({ message: 'Subscribed successfully!' });
});

// Configure Nodemailer transporter for Gmail using env variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS 
  }
});

// Function to send update email to one recipient
function sendUpdateEmail(to, subject, text) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

// Example route to trigger sending emails to all subscribers
app.post('/api/send-update', (req, res) => {
  const { subject, message } = req.body;
  if (!subject || !message) {
    return res.status(400).json({ error: 'Subject and message are required' });
  }

  subscribers.forEach(email => {
    sendUpdateEmail(email, subject, message);
  });

  res.status(200).json({ message: 'Update emails sent' });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
