const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Razorpay = require('razorpay');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

/* ================= MONGODB CONNECTION ================= */

async function connectDB() {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('❌ MONGODB_URI missing in .env');
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed');
    console.error(error.message);
    process.exit(1);
  }
}

connectDB();

/* ================= SCHEMAS ================= */

const Subscriber = mongoose.model('Subscriber', new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now }
}));

const Contact = mongoose.model('Contact', new mongoose.Schema({
  fullname: String,
  email: String,
  subject: String,
  phone: String,
  message: String,
  sentAt: { type: Date, default: Date.now }
}));

const Helpdesk = mongoose.model('Helpdesk', new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  type: String,
  orgName: String,
  enquiry: String,
  sentAt: { type: Date, default: Date.now }
}));

const Donation = mongoose.model('Donation', new mongoose.Schema({
  fullName: String,
  mobileNumber: String,
  email: String,
  address: String,
  country: String,
  pincode: String,
  state: String,
  city: String,
  panNumber: String,
  amount: Number,
  razorpay_payment_id: String,
  razorpay_order_id: String,
  razorpay_signature: String,
  paidAt: { type: Date, default: Date.now }
}));

/* ================= EMAIL ================= */

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/* ================= RAZORPAY ================= */

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

/* ================= ROUTES ================= */

app.post('/subscribe', async (req, res) => {
  try {
    await Subscriber.create({ email: req.body.email });
    res.json({ message: 'Subscribed successfully' });
  } catch (err) {
    if (err.code === 11000)
      return res.status(409).json({ error: 'Email already exists' });

    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/contact', async (req, res) => {
  try {
    await Contact.create(req.body);
    res.json({ message: 'Message saved' });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/helpdesk', async (req, res) => {
  try {
    await Helpdesk.create(req.body);
    res.json({ message: 'Helpdesk enquiry saved' });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/donate/order', async (req, res) => {
  try {
    const order = await razorpay.orders.create({
      amount: Math.round(req.body.amount * 100),
      currency: 'INR',
      receipt: 'donation_' + Date.now()
    });

    res.json({ success: true, order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.get('/', (req, res) => {
  res.json({ status: 'Backend running successfully 🚀' });
});

/* ================= SERVER ================= */

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});