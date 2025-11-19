import React, { useState } from "react";
import axios from "axios";

import "./styles/donate.css";

function Donate() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    address: "",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    pincode: "",
    amount: "",
    panNumber: "",
    termsAccepted: false,
    communicationConsent: false
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleDonateNow = async (e) => {
    e.preventDefault();

    // Basic validation (can expand)
    if (
      !form.fullName ||
      !form.email ||
      !form.mobileNumber ||
      !form.address ||
      !form.pincode ||
      !form.amount ||
      !form.panNumber ||
      !form.termsAccepted
    ) {
      setStatus("Please fill all required fields and accept Terms.");
      return;
    }

    setStatus("Processing payment...");

    try {
      // Step 1: Create Razorpay Order
      const orderRes = await axios.post(
        "http://localhost:5000/donate/order",
        { amount: form.amount }
      );

      if (!orderRes.data.order) {
        setStatus("Payment order could not be created.");
        return;
      }

      // Step 2: Open Razorpay Checkout
      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // replace with real key
        amount: orderRes.data.order.amount,
        currency: "INR",
        name: "Mindron Foundation",
        description: "Donation",
        order_id: orderRes.data.order.id,
        handler: async function (response) {
          // Step 3: Save donation to backend after payment
          const saveRes = await axios.post(
            "http://localhost:5000/donate/verify",
            {
              ...form,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature
            }
          );
          if (saveRes.data.success) {
            setStatus("Thank you for your donation! Invoice has been sent to your email.");
          } else {
            setStatus("Payment succeeded but could not save donation info.");
          }
        },
        prefill: {
          name: form.fullName,
          email: form.email,
          contact: form.mobileNumber
        },
        theme: { color: "#7eb564" }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      setStatus("Error while processing payment.");
    }
  };

  return (
    <div className="donate-container">
      <h2>Mindron Foundation</h2>
      <form className="donate-form" onSubmit={handleDonateNow}>
        <div className="form-row">
          <div>
            <label>Full Name *</label>
            <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required />
          </div>
          <div>
            <label>Mobile Number *</label>
            <input type="tel" name="mobileNumber" value={form.mobileNumber} onChange={handleChange} required />
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
            <input type="text" name="panNumber" value={form.panNumber} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row checkbox-row">
          <label>
            <input type="checkbox" name="termsAccepted" checked={form.termsAccepted} onChange={handleChange} required /> By submitting this form I agree to the website’s Terms and Conditions and consent to the storage of my information.
          </label>
        </div>
        <div className="form-row checkbox-row">
          <label>
            <input type="checkbox" name="communicationConsent" checked={form.communicationConsent} onChange={handleChange} /> I agree to let Mindron contact me by text or email about my donations, campaigns, and updates.
          </label>
        </div>
        <div className="donate-footer">
          <p>Your contributions are eligible for up to 50% tax benefit under Section 80G, as Mindron Foundation is registered as a non-profit organization.</p>
          <div className="payment-icons">
            <span>RuPay</span> <span>UPI</span> <span>VISA</span> <span>Mastercard</span>
          </div>
        </div>
        <button className="donate-btn" type="submit">DONATE NOW</button>
        {status && <p style={{ marginTop: 20, textAlign: "center", color: "#217943", fontWeight: "bold" }}>{status}</p>}
      </form>
    </div>
  );
}

export default Donate;
