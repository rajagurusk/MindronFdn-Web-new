import "./styles/contact.css";
import Footer from "../components/footer.jsx";
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const contactDetails = [
  {
    title: "Corporate Headquarter(mumbai)",
    contact: "+91 XXXXXXXXXX",
    email: "mindronfoundation@gmail.com",
    address: "D-218, Agra Road Industrial Premises, Amrut Nagar, Behind R City Mall, Ghatkopar(west), Mumbai-400086.",
    map: "/images/map-mumbai.png",
  },
  {
    title: "Lucknow",
    contact: "+91 XXXXXXXXXX",
    email: "mindronfoundation@gmail.com",
    address: "Office no. 404, 4th floor, Mukut Tower, Kursi Rd, Sector 2, Vikas nagar, Lucknow, Uttar Pradesh 226022.",
    map: "/images/map-lucknow.png",
  },
  {
    title: "USA–New York",
    contact: "+91 XXXXXXXXXX",
    email: "mindronfoundation@gmail.com",
    address: "D-218, Agra Road Industrial Premises, Amrut Nagar, Behind R City Mall, Ghatkopar(west), Mumbai-400086.",
    map: "/images/map-ny.png",
  },
  {
    title: "Hong Kong",
    contact: "+91 XXXXXXXXXX",
    email: "mindronfoundation@gmail.com",
    address: "Office no. 404, 4th floor, Mukut Tower, Kursi Rd, Sector 2, Vikas nagar, Lucknow, Uttar Pradesh 226022.",
    map: "/images/map-hongkong.png",
  }
];

function OfficesSection() {
  return (
    <section className="offices-section">
      {contactDetails.map((office, idx) => (
        <div className="office-card" key={idx}>
          <h4>{office.title}</h4>
          <img src={office.map} alt={office.title + " map"} className="map-img" />
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

  return (
    <section className="contact-form-section">
      <h2>Contact Us</h2>
      <p>
        We'd Love to hear from you—whether it's a question, suggestion, or a story you'd like to share
      </p>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" name="fullname" placeholder="Full Name" required />
        </div>
        <div className="form-row">
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div className="form-row">
          <input type="text" name="subject" placeholder="Subject" required />
          <input type="text" name="phone" placeholder="Phone No" required />
        </div>
        <div className="form-row">
          <textarea name="message" placeholder="Your Message" rows={4} required />
        </div>
        <div className="captcha-row" style={{ display: 'flex', justifyContent: 'center', margin: '18px 0' }}>
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            ref={recaptchaRef}
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
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
import "./styles/contact.css";