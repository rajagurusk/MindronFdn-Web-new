import React from "react";
import "./styles/Donatemodel.css";

export default function Donatemodel({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Mindron Foundation</h2>
        <div className="qr-section">
          {/* Replace with your real QR image */}
          <img src="/images/upi-qr.png" alt="UPI QR" className="qr-image" />
          <div className="upi-id">UPI ID: yourupi123@upi</div>
        </div>
        <h3>Cause of Donation</h3>
        <p>
          Your donation supports our educational, food and healthcare initiatives for those in need.
        </p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
