import React, { useState } from "react";


const Cashout = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  if (!isOpen) return null;

  const handlePercentageClick = (percent) => {
    // Example: dynamically set based on some total balance
    const total = 1.91; 
    setAmount(((total * percent) / 100).toFixed(2));
  };

  return (
    <div className="cashout-overlay">
      <div className="cashout-modal">
        <div className="cashout-header">
          <h3>Cash out</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Amount Input */}
        <div className="form-group">
          <label>Amount</label>
          <div className="amount-input-wrapper">
            <input
              type="text"
              placeholder="$0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="percent-buttons">
              <button onClick={() => handlePercentageClick(25)}>25%</button>
              <button onClick={() => handlePercentageClick(50)}>50%</button>
              <button onClick={() => handlePercentageClick(75)}>75%</button>
              <button onClick={() => handlePercentageClick(100)}>Max</button>
            </div>
          </div>
          <p className="available-text">$1.91 available</p>
        </div>

        {/* Address Input */}
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            placeholder="Solana address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <p className="address-note">
            Double-check that the address you type supports Solana assets
          </p>
        </div>

        {/* Buttons */}
        <div className="button-row">
          <button className="close-btn-modal" onClick={onClose}>Close</button>
          <button className="next-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Cashout;
