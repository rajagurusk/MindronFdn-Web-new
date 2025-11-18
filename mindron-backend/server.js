const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://mindronfoundation:mindronfoundation@mindronfoundation.wbkepnb.mongodb.net/test';
// -------------------------------------^ ensure "/test"
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Subscriber Schema
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now }
});
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// Contact Schema (for contact page)
const contactSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  subject: String,
  phone: String,
  message: String,
  sentAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// Helpdesk Schema (for helpdesk page)
const helpdeskSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  type: String,           // Company, Organization, Charity Trust
  orgName: String,        // Name of the company/org/charity
  enquiry: String,        // Enquiry Regarding
  sentAt: { type: Date, default: Date.now }
});
const Helpdesk = mongoose.model('Helpdesk', helpdeskSchema);

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mindronfoundation@gmail.com',
    pass: 'lizs xfhn xvee suhg' // Use your Gmail App Password
  }
});

// --- Subscriber Route
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email) return res.status(400).json({ error: 'Email is required' });
  if (!emailRegex.test(email)) return res.status(400).json({ error: 'Invalid email address' });
  try {
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    // Send thank-you email
    const mailOptions = {
      from: '"Mindron Foundation" <mindronfoundation@gmail.com>',
      to: email,
      subject: 'Thank you for subscribing!',
      text: 'Thank you for subscribing to Mindron Foundation updates!',
      html: '<h3>Thank you for subscribing to Mindron Foundation!</h3>'
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.error('Email not sent:', error);
      else console.log('Thank you email sent:', info.response);
    });

    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ error: 'Email already subscribed' });
    res.status(500).json({ error: 'Server error' });
  }
});

// --- Contact Route
app.post('/contact', async (req, res) => {
  const { fullname, email, subject, phone, message } = req.body;
  if (!fullname || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill out all required fields.' });
  }
  try {
    const contactEntry = new Contact({ fullname, email, subject, phone, message });
    await contactEntry.save();

    const mailOptions = {
      from: `"Contact Form" <${email}>`,
      to: 'mindronfoundation@gmail.com',
      subject: `Contact Form Submission: ${subject}`,
      text: `
        Full Name: ${fullname}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h2>Contact Form Submission</h2>
        <p><b>Full Name:</b> ${fullname}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `
    };
    await transporter.sendMail(mailOptions);

    res.json({ message: 'Form submitted successfully. We will get back to you soon!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again later.' });
  }
});

// --- Helpdesk Route
app.post('/helpdesk', async (req, res) => {
  const { name, phone, email, type, orgName, enquiry } = req.body;
  if (!name || !email || !type || !orgName || !enquiry) {
    return res.status(400).json({ error: 'Please fill all required fields.' });
  }
  try {
    const helpdeskEntry = new Helpdesk({ name, phone, email, type, orgName, enquiry });
    await helpdeskEntry.save();

    const mailOptions = {
      from: `"Helpdesk Enquiry" <${email}>`,
      to: 'mindronfoundation@gmail.com',
      subject: `Helpdesk Enquiry from ${name} (${type})`,
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Type: ${type}
        Organization/Company/Charity: ${orgName}
        Enquiry Regarding: ${enquiry}
      `,
      html: `
        <h2>Helpdesk Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Type:</b> ${type}</p>
        <p><b>Organization/Company/Charity:</b> ${orgName}</p>
        <p><b>Enquiry Regarding:</b> ${enquiry}</p>
      `
    };
    await transporter.sendMail(mailOptions);

    res.json({ message: 'Helpdesk enquiry sent successfully. We will contact you soon!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again later.' });
  }
});

app.get('/', (req, res) => {
  res.send('Mindron Foundation Backend Running!');
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
