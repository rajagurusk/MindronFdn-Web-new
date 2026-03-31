import "./styles/contact.css";
import Footer from "../components/footer.jsx";
import React, { useState } from "react";
import API_URL from "../../api.js";

function OfficesSection() {
  const contactDetails = [
    {
      title: "Corporate Headquarter (Mumbai)",
      contacts: ["022 4516 6539", "+91 86559 72632", "+91 86559 72633"],
      email: "mindronfoundation@gmail.com",
      address:
        "D-218, Agra Road Industrial Premises, Amrut Nagar, Behind R City Mall, Ghatkopar (West), Mumbai-400086.",
    },
    {
      title: "Lucknow",
      contacts: ["+91 86559 72632", "+91 86559 72633"],
      email: "mindronfoundation@gmail.com",
      address:
        "Office no. 404, 4th floor, Mukut Tower, Kursi Rd, Sector 2, Vikas Nagar, Lucknow, Uttar Pradesh 226022.",
    },
    {
      title: "USA–New York",
      contacts: [
        "(001) 212-354-4400",
        "(001) +917 7535253",
        "(001) 212-354-4408",
      ],
      email: "mindronfoundation@gmail.com",
      address:
        "20 West. 47th Street, 15/F., Suite 1500, New York, NY 10036, USA.",
    },
    {
      title: "Hong Kong",
      contacts: [
        "(852) 2766 2008",
        "(852) 66443807",
        "(852) 67676220",
        "(852) 2766 2040",
      ],
      email: "mindronfoundation@gmail.com",
      address:
        "Room 706, 7/F, Hart Avenue Plaza, 5-9 Hart Avenue, Tsim Sha Tsui, Kowloon, Hong Kong.",
    },
  ];

  return (
    <section className="offices-section">
      {contactDetails.map((office, idx) => (
        <div className="office-card" key={idx}>
          <h4>{office.title}</h4>
          <div className="office-content">
            <span className="office-label">Contact no: </span>
            <span className="office-value">{office.contacts.join(", ")}</span>
            <br />
            <span className="office-label">Email: </span>
            <span className="office-value">{office.email}</span>
            <br />
            <span className="office-label">Address: </span>
            <span className="office-address">{office.address}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: form.fullname.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(data.message || "Message sent successfully.");
        setForm({
          fullname: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus(data.error || data.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Contact error:", error);
      setStatus("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact-form-section">
      <h2>Contact Us</h2>
      <p>Have a question, a bright idea, or a story close to your heart?</p>
      <p>Let’s start a conversation</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row single-row">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            required
            value={form.fullname}
            onChange={handleChange}
          />
        </div>

        <div className="form-row single-row">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={form.subject}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone No"
            required
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-row single-row">
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {status && <p className="contact-status">{status}</p>}
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-page-inner">
        <div className="contact-layout">
          <OfficesSection />
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}