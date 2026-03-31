import React, { useState } from "react";
import axios from "axios";
import API_URL from "../api";
import "./styles/donate.css";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const citiesByState = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Tawang"],
  Assam: ["Guwahati", "Dibrugarh", "Silchar"],
  Bihar: ["Patna", "Gaya", "Muzaffarpur"],
  Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur"],
  Goa: ["Panaji", "Margao", "Vasco da Gama"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  Haryana: ["Gurugram", "Faridabad", "Panipat", "Ambala"],
  "Himachal Pradesh": ["Shimla", "Dharamshala", "Manali"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  Manipur: ["Imphal", "Thoubal"],
  Meghalaya: ["Shillong", "Tura"],
  Mizoram: ["Aizawl", "Lunglei"],
  Nagaland: ["Kohima", "Dimapur"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
  Punjab: ["Ludhiana", "Amritsar", "Jalandhar"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur"],
  Sikkim: ["Gangtok", "Namchi"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  Telangana: ["Hyderabad", "Warangal"],
  Tripura: ["Agartala", "Udaipur"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
  Uttarakhand: ["Dehradun", "Haridwar"],
  "West Bengal": ["Kolkata", "Siliguri", "Durgapur"],
};

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
    communicationConsent: false,
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setForm({
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
      communicationConsent: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "state") {
      const firstCity = citiesByState[value]?.[0] || "";
      setForm((prev) => ({
        ...prev,
        state: value,
        city: firstCity,
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDonateNow = async (e) => {
    e.preventDefault();
    setStatus("");

    const trimmedForm = {
      ...form,
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      mobileNumber: form.mobileNumber.trim(),
      address: form.address.trim(),
      pincode: form.pincode.trim(),
      amount: form.amount.toString().trim(),
      panNumber: form.panNumber.trim().toUpperCase(),
    };

    if (
      !trimmedForm.fullName ||
      !trimmedForm.email ||
      !trimmedForm.mobileNumber ||
      !trimmedForm.address ||
      !trimmedForm.pincode ||
      !trimmedForm.amount ||
      !trimmedForm.termsAccepted
    ) {
      setStatus("Please fill all required fields and accept Terms.");
      return;
    }

    if (Number(trimmedForm.amount) <= 0) {
      setStatus("Please enter a valid donation amount.");
      return;
    }

    if (!window.Razorpay) {
      setStatus("Razorpay SDK failed to load.");
      return;
    }

    if (!import.meta.env.VITE_RAZORPAY_KEY_ID) {
      setStatus("Razorpay key is missing in frontend environment variables.");
      return;
    }

    setLoading(true);
    setStatus("Processing payment...");

    try {
      const orderRes = await axios.post(`${API_URL}/donate/order`, {
        amount: trimmedForm.amount,
      });

      if (!orderRes.data?.order) {
        setStatus("Payment order could not be created.");
        setLoading(false);
        return;
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderRes.data.order.amount,
        currency: "INR",
        name: "Mindron Foundation",
        description: "Donation",
        order_id: orderRes.data.order.id,
        handler: async function (response) {
          try {
            setStatus("Verifying payment...");

            const saveRes = await axios.post(`${API_URL}/donate/verify`, {
              ...trimmedForm,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (saveRes.data?.success) {
              setStatus(
                "Thank you for your donation! Receipt has been sent to your email."
              );
              resetForm();
            } else {
              setStatus("Payment succeeded but donation verification failed.");
            }
          } catch (verifyError) {
            console.error("Donation verify error:", verifyError);
            setStatus("Payment succeeded but could not verify donation.");
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: trimmedForm.fullName,
          email: trimmedForm.email,
          contact: trimmedForm.mobileNumber,
        },
        theme: {
          color: "#7eb564",
        },
        modal: {
          ondismiss: function () {
            setStatus("Payment popup closed.");
            setLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        setStatus(response.error?.description || "Payment failed.");
        setLoading(false);
      });

      rzp.open();
    } catch (error) {
      console.error("Donation order error:", error);
      setStatus(
        error?.response?.data?.message || "Error while processing payment."
      );
      setLoading(false);
    }
  };

  return (
    <div className="donate-container">
      <h2>Mindron Foundation</h2>

      <form className="donate-form" onSubmit={handleDonateNow}>
        <div className="form-row">
          <div>
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Mobile Number *</label>
            <input
              type="tel"
              name="mobileNumber"
              value={form.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Address *</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Country</label>
            <select name="country" value={form.country} disabled>
              <option>India</option>
            </select>
          </div>

          <div>
            <label>Pincode *</label>
            <input
              type="text"
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>State</label>
            <select name="state" value={form.state} onChange={handleChange}>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Amount (INR) *</label>
            <input
              type="number"
              name="amount"
              min="1"
              value={form.amount}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>City</label>
            <select name="city" value={form.city} onChange={handleChange}>
              {citiesByState[form.state]?.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>PAN Number</label>
            <input
              type="text"
              name="panNumber"
              value={form.panNumber}
              onChange={handleChange}
              placeholder="Optional for 80G receipt"
            />
          </div>
        </div>

        <div className="form-row checkbox-row">
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={form.termsAccepted}
              onChange={handleChange}
              required
            />{" "}
            By submitting this form I agree to the website’s Terms and
            Conditions and consent to the storage of my information.
          </label>
        </div>

        <div className="form-row checkbox-row">
          <label>
            <input
              type="checkbox"
              name="communicationConsent"
              checked={form.communicationConsent}
              onChange={handleChange}
            />{" "}
            I agree to let Mindron contact me by text or email about my
            donations, campaigns, and updates.
          </label>
        </div>

        <div className="donate-footer">
          <p>
            Your contributions are eligible for up to 50% tax benefit under
            Section 80G, as Mindron Foundation is registered as a non-profit
            organization.
          </p>

          <div className="payment-icons">
            <img
              src="/images/donateimg.jpg"
              alt="Supported Payment Methods"
              style={{ maxWidth: "250px", height: "auto" }}
            />
          </div>
        </div>

        <button className="donate-btn" type="submit" disabled={loading}>
          {loading ? "PROCESSING..." : "DONATE NOW"}
        </button>

        {status && (
          <p
            style={{
              marginTop: 20,
              textAlign: "center",
              color: "#217943",
              fontWeight: "bold",
            }}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
}

export default Donate;