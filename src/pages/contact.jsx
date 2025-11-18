import "./styles/contact.css";
import Footer from "../components/footer.jsx";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function OfficesSection() {
  const contactDetails = [
    {
      title: "Corporate Headquarter(mumbai)",
      contact: "+91 XXXXXXXXXX",
      email: "mindronfoundation@gmail.com",
      address: "D-218, Agra Road Industrial Premises, Amrut Nagar, Behind R City Mall, Ghatkopar(west), Mumbai-400086.",
    },
    {
      title: "Lucknow",
      contact: "+91 XXXXXXXXXX",
      email: "mindronfoundation@gmail.com",
      address: "Office no. 404, 4th floor, Mukut Tower, Kursi Rd, Sector 2, Vikas nagar, Lucknow, Uttar Pradesh 226022.",
    },
    {
      title: "USA–New York",
      contact: "+91 XXXXXXXXXX",
      email: "mindronfoundation@gmail.com",
      address: "D-218, Agra Road Industrial Premises, Amrut Nagar, Behind R City Mall, Ghatkopar(west), Mumbai-400086.",
    },
    {
      title: "Hong Kong",
      contact: "+91 XXXXXXXXXX",
      email: "mindronfoundation@gmail.com",
      address: "Office no. 404, 4th floor, Mukut Tower, Kursi Rd, Sector 2, Vikas nagar, Lucknow, Uttar Pradesh 226022.",
    }
  ];
  return (
    <section className="offices-section">
      {contactDetails.map((office, idx) => (
        <div className="office-card" key={idx}>
          <h4>{office.title}</h4>
          <div style={{ marginTop: 8 }}>
            <span className="office-label">Contact no: </span><span className="office-value">{office.contact}</span><br />
            <span className="office-label">Email: </span><span className="office-value">{office.email}</span><br />
            <span className="office-label">Address: </span><span className="office-address">{office.address}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

function ContactForm() {
  const recaptchaRef = useRef();
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('');

    // Optional: You can verify reCAPTCHA here before sending data to backend
    // const recaptchaValue = recaptchaRef.current.getValue();
    // if (!recaptchaValue) {
    //   setStatus('Please complete the reCAPTCHA.');
    //   return;
    // }

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (response.ok) {
        setStatus(data.message);
        setForm({ fullname: '', email: '', subject: '', phone: '', message: '' });
      } else {
        setStatus(data.error || 'Submission failed.');
      }
    } catch {
      setStatus('Error connecting to server.');
    }
  }

  return (
    <section className="contact-form-section">
      <h2>Contact Us</h2>
      <p>We'd Love to hear from you—whether it's a question, suggestion, or a story you'd like to share</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" name="fullname" placeholder="Full Name" required value={form.fullname} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input type="email" name="email" placeholder="Email Address" required value={form.email} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input type="text" name="subject" placeholder="Subject" required value={form.subject} onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone No" required value={form.phone} onChange={handleChange} />
        </div>
        <div className="form-row">
          <textarea name="message" placeholder="Your Message" rows={4} required value={form.message} onChange={handleChange} />
        </div>
        <div className="captcha-row" style={{ display: 'flex', justifyContent: 'center', margin: '18px 0' }}>
          <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" ref={recaptchaRef} />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      {status && <p style={{ color: "#c43d3d", marginTop: "12px" }}>{status}</p>}
    </section>
  );
}

export default function ContactPage() {
  return (
    <div>
      <OfficesSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
