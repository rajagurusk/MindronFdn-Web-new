import React, { useState } from "react";
import Footer from "../components/footer.jsx";
import "./styles/helpdesk.css";

const Helpdesk = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    orgName: "",
    enquiry: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    try {
      const response = await fetch("http://localhost:5000/helpdesk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus(data.message);
        setForm({
          name: "",
          phone: "",
          email: "",
          type: "",
          orgName: "",
          enquiry: "",
        });
      } else {
        setStatus(data.error || "Submission failed.");
      }
    } catch {
      setStatus("Error connecting to server.");
    }
  };

  return (
    <div className="helpdesk-page">
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
            name="type"
            value={form.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Company">Company</option>
            <option value="Organization">Organization</option>
            <option value="Charity Trust">Charity Trust</option>
          </select>
          <input
            type="text"
            name="orgName"
            placeholder="Name of the company/org/charity"
            value={form.orgName}
            onChange={handleChange}
            required
          />
          <textarea
            name="enquiry"
            placeholder="Enquiry Regarding"
            value={form.enquiry}
            onChange={handleChange}
            required
          />
          <button type="submit" className="helpdesk-submit-btn">
            Submit
          </button>
          {status && <div className="helpdesk-status-message">{status}</div>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Helpdesk;
