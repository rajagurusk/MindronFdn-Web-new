import "./styles/contact.css";
import Footer from "../components/footer.jsx";
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactHero({ src = "/images/contactus.jpg", alt = "Contact banner" }) {
  return (
    <section className="hero-image" aria-label={alt}>
      <img src={src} alt={alt} />
    </section>
  );
}

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

function ContactForm() {
  const recaptchaRef = useRef();

  return (
    <section className="contact-form-wrap">
      <div className="contact-form-card">
        <h2>Contact Us</h2>
        <div className="form-subtitle">
          We'd Love to hear from you—whether it's a question, suggestion, or a story you'd like to share
        </div>
        <form className="contact-form">
          <input type="text" name="fullname" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <div className="row-flex">
            <input type="text" name="subject" placeholder="Subject" required />
            <input type="text" name="phone" placeholder="Phone No" required />
          </div>
          <textarea name="message" placeholder="Your Message" rows={4} required />
          <div className="recaptcha-row" style={{ display: 'flex', justifyContent: 'center', margin: '18px 0' }}>
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY" // <-- Replace with your own site key
              ref={recaptchaRef}
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
