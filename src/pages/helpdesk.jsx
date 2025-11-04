import React, { useState } from "react";
import Footer from "../components/footer.jsx";
import "./styles/helpdesk.css";


const Helpdesk = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "",
    subject: "",
    message: "",
    howHeard: "",
    notRobot: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="helpdesk-page">
      <div className="helpdesk-header-img">
        <img
          src="https://images.pexels.com/photos/6646912/pexels-photo-6646912.jpeg"
          alt="Volunteers"
        />
        <div className="helpdesk-img-credit">
          iStock<br />Credit: dragana991
        </div>
      </div>
      <div className="helpdesk-container">
        <form className="helpdesk-form" onSubmit={handleSubmit}>
          <h2>Enquiry</h2>
          <p className="helpdesk-desc">
            Got a question? Just drop us a message below
          </p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone No"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <select
            name="inquiryType"
            value={form.inquiryType}
            onChange={handleChange}
            required
          >
            <option value="">Select One</option>
            <option value="general">General Inquiry</option>
            <option value="donation">Donation</option>
            <option value="volunteering">Volunteering</option>
          </select>
          <input
            type="text"
            name="subject"
            placeholder=""
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="I have a question to ask you regarding your charity"
            value={form.message}
            onChange={handleChange}
            required
          />
          <select
            name="howHeard"
            value={form.howHeard}
            onChange={handleChange}
            required
          >
            <option value="">Select One</option>
            <option value="friend">Friend</option>
            <option value="social">Social Media</option>
            <option value="ad">Advertisement</option>
          </select>
          <div className="helpdesk-recaptcha">
            <input
              type="checkbox"
              name="notRobot"
              checked={form.notRobot}
              onChange={handleChange}
              required
            />
            <span>I'm not a robot</span>
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="reCaptcha"
              className="helpdesk-captcha-img"
            />
          </div>
          <button type="submit" className="helpdesk-submit-btn">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Helpdesk;
