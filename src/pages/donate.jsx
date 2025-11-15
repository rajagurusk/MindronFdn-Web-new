import React, { useState } from "react";
import "./styles/donate.css";

function Donate() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    pincode: "",
    amount: "",
    pan: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to backend)
    alert("Donation submitted!");
  };

  return (
    <div className="donate-container">
      <h2>Mindron Foundation</h2>
      <form className="donate-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label>Full Name *</label>
            <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required />
          </div>
          <div>
            <label>Mobile Number *</label>
            <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label>Email *</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Address *</label>
            <input type="text" name="address" value={form.address} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label>Country</label>
            <select name="country" value={form.country} onChange={handleChange}>
              <option>India</option>
            </select>
          </div>
          <div>
            <label>Pincode</label>
            <input type="text" name="pincode" value={form.pincode} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label>State</label>
            <select name="state" value={form.state} onChange={handleChange}>
              <option>Maharashtra</option>
              {/* Add other states as needed */}
            </select>
          </div>
          <div>
            <label>Amount (INR)</label>
            <input type="number" name="amount" value={form.amount} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label>City</label>
            <select name="city" value={form.city} onChange={handleChange}>
              <option>Mumbai</option>
              {/* Add other cities as needed */}
            </select>
          </div>
          <div>
            <label>PAN Number *</label>
            <input type="text" name="pan" value={form.pan} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row checkbox-row">
          <label>
            <input type="checkbox" required /> By submitting this form I agree to the website’s Terms and Conditions and consent to the storage of my information.
          </label>
        </div>
        <div className="form-row checkbox-row">
          <label>
            <input type="checkbox" /> I agree to let Mindron contact me by text or email about my donations, campaigns, and updates.
          </label>
        </div>
        <div className="donate-footer">
          <p>Your contributions are eligible for up to 50% tax benefit under Section 80G, as Mindron Foundation is registered as a non-profit organization.</p>
          <div className="payment-icons">
            <span>RuPay</span> <span>UPI</span> <span>VISA</span> <span>Mastercard</span>
          </div>
        </div>
        <button className="donate-btn" type="submit">DONATE NOW</button>
      </form>
    </div>
  );
}

export default Donate;
