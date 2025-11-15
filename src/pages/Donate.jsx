import React, { useState } from 'react';
import '../pages/styles/donate.css';


function Donate() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: 'India',
    state: 'Maharashtra',
    city: 'Mumbai',
    mobile: '',
    address: '',
    pincode: '',
    amount: '500',
    pan: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountNum = Number(formData.amount);
    if (amountNum < 200 || amountNum > 200000) {
      alert("Amount must be between ₹200 and ₹2,00,000");
      return;
    }
    alert("Donation submitted!");
  };

  return (
    <div className="donate-page">
      <div className="donate-header">
        <button className="donate-back-btn">&lt; DONATE TO</button>
      </div>
      <h2>Mindron Foundation </h2>
      <form className="donate-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Full Name *</label>
          <input name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Email *</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Country</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="India">India</option>
            {/* Add more countries if needed */}
          </select>
        </div>
        <div className="form-row">
          <label>State</label>
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="Maharashtra">Maharashtra</option>
            {/* Add more states if needed */}
          </select>
        </div>
        <div className="form-row">
          <label>City</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="Mumbai">Mumbai</option>
            {/* Add more cities if needed */}
          </select>
        </div>
        <div className="form-row">
          <label>Mobile Number *</label>
          <input name="mobile" value={formData.mobile} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Address *</label>
          <input name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Pincode</label>
          <input name="pincode" value={formData.pincode} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label>Amount (INR)</label>
          <input 
            name="amount" 
            type="number" 
            min="200" 
            max="200000" 
            step="1"
            value={formData.amount} 
            onChange={handleChange}
            required
          />
          <small style={{color: "#999"}}>Enter any amount from ₹200 to ₹2,00,000</small>
        </div>
        <div className="form-row">
          <label>PAN Number *</label>
          <input name="pan" value={formData.pan} onChange={handleChange} required />
        </div>
        <div className="form-checkbox">
          <input type="checkbox" required /> By submitting this form I agree to the website’s Terms and Conditions and consent to the storage of my information.
        </div>
        <div className="form-checkbox">
          <input type="checkbox" /> I agree to let Mindron contact me by text or email about my donations, campaigns, and updates.
        </div>
        <div className="donate-note">
          Your contributions are eligible for up to 50% tax benefit under Section 80G, as Pratham Education Foundation is registered as a non-profit organization.
        </div>
        <div className="donate-payment-methods">
          <span>RuPay</span> <span>UPI</span> <span>VISA</span> <span>MasterCard</span>
        </div>
        <button className="donate-submit-btn" type="submit">DONATE NOW</button>
      </form>
    </div>
  );
}

export default Donate;
