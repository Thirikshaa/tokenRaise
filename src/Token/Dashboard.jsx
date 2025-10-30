import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
import './Dashboard.css';
import demo from '../assets/default-avatar.svg'
import menu from '../assets/Menu Meatballs.png'
import vector from '../assets/Vector.png'
import tick from '../assets/tick.png'
import iicon from '../assets/iicon.png'
import load from '../assets/load.png'

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [showModal, setShowModal] = useState(false); // Cashout modal
const [showBroadcast, setShowBroadcast] = useState(false); // Broadcasting modal
const [showSubmitted, setShowSubmitted] = useState(false); // Submitted modal
 const [openSolscanModal, setOpenSolscanModal] = useState(false);
const handleViewOnSolscan = () => {
    // Close current modal and open next modal
    setOpenSolscanModal(true);
  };


  return (
    <div>
      {/* <Helmet>
        <title>Dashboard</title>
      </Helmet> */}

      
        <div className="main-gradient"></div>
      <div className="main-div">
        <div className="studio">
        <button className='studio-btn'>Studio Login</button>
        </div>
        <div className="header">
        <h2 style={{ fontWeight: "800", fontSize: "24px", color: "#FFFFFF" }}>
          Dashboard
        </h2>
        <button className='prjs-btn'>New Project</button>
        </div>

        {/* Fee section */}
        <div className="fees">
          <div className="unclaimed-fees">
            <h2 style={{ fontWeight: 800, fontSize: "32px" }}>$0.00</h2>
            <p style={{ color: "#FFFFFF99", fontWeight: 400, fontSize: "16px" }}>
              Total Unclaimed Fees
            </p>
          </div>
          <div className="claimed-fees">
            <h2 style={{ fontWeight: 800, fontSize: "32px" }}>$0.00</h2>
            <p style={{ color: "#FFFFFF99", fontWeight: 400, fontSize: "16px" }}>
              Total Claimed Fees
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="tab-row">
          <button
            className={`prj-btn ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`prj-btn ${activeTab === "wallets" ? "active" : ""}`}
            onClick={() => setActiveTab("wallets")}
          >
            Wallet
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "projects" ? (
            <div className="projects-content">

              {/* ---------- CARD 1 ---------- */}
              <div className="project-card">
                <div className="top-row">
                  <div className="profile-section">
                    <img src={demo} alt="demo" className="token-img" />
                    <div className="profile-rights">
                      <p className="token-name">
                        TestToken <span className="bonding">Bonding</span>
                      </p>
                      <p className="token-info">Ticker: $TESTTOKEN</p>
                      <p className="token-info">Launched: Aug 8, 2025</p>
                    </div>
                  </div>
                  <img src={menu} alt="menu" className="menu-icon" />
                </div>

                {/* Progress bar */}
                <div className="marketcap-row">
                <div className="mc">
                  <p style={{fontWeight:"600",fontSize:"12px"}}>Market cap</p>
                  <p style={{fontWeight:"600",fontSize:"12px"}}>Graduation Goal</p>
                </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "55%" }}></div>
                  </div>
                  <p className="marketcap-value">$55,250</p>
                </div>

                {/* Stats row */}
                <div className="stats-row">
                  <div className="stat-box">
                    <p>24h Volume</p>
                    <h4>$12,480</h4>
                  </div>
                  <div className="stat-box">
                    <p>Holders</p>
                    <h4>1,243</h4>
                  </div>
                  <div className="stat-box">
                    <p>Copy CA</p>
                    <h4>$890.45</h4>
                  </div>
                </div>
              </div>

              {/* ---------- CARD 2 ---------- */}
              <div className="project-card">
                <div className="top-row">
                  <div className="profile-section">
                    <img src={demo} alt="demo" className="token-img" />
                    <div className="profile-rights">
                      <p className="token-name">
                        TestToken2 <span className="graduated">Graduated</span>
                      </p>
                      <p className="token-info">Ticker: $TESTTOKEN2</p>
                      <p className="token-info">Launched: Aug 12, 2025</p>
                    </div>
                  </div>
                  <img src={menu} alt="menu" className="menu-icon" />
                </div>

                {/* Progress bar */}
                <div className="marketcap-row">
                  <p>Market cap</p>
                  <div className="progress-bar">
                    <div className="progress-fill graduated-bar" style={{ width: "100%" }}></div>
                  </div>
                  <p className="marketcap-value">$100,000 / Goal</p>
                </div>

                {/* Stats row */}
                <div className="stats-row">
                  <div className="stat-box">
                    <p>24h Volume</p>
                    <h4>$98,120</h4>
                  </div>
                  <div className="stat-box">
                    <p>Holders</p>
                    <h4>5,804</h4>
                  </div>
                  <div className="stat-box">
                    <p>Fees Earned</p>
                    <h4>$3,420</h4>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="wallets-content">
              <ul className="wallet-list">
  <li>
    <div className="wallet-left">
      <img src={demo} alt="demo" className="token-img" />
      <p>TestToken</p>
    </div>
    <p className="wallet-amount">123,456.00</p>
  </li>
  <li>
    <div className="wallet-left">
      <img src={demo} alt="demo" className="token-img" />
      <p>TestToken2</p>
    </div>
    <p className="wallet-amount">8,900.00</p>
  </li>
  <li>
    <div className="wallet-left">
      <img src={demo} alt="demo" className="token-img" />
      <p>Solana</p>
    </div>
    <p className="wallet-amount">2.50</p>
  </li>
</ul>


              <button className="cashout-btn" onClick={() => setShowModal(true)}>
                Cashout
              </button>
            </div>
          )}

        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="cashout-modal">
            <div className="modal-header">
              <h3>Cash out</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                ✕
              </button>
            </div>

            <div className="modal-body">
              <label>Amount</label>
              <div className="amount-input-row">
                <input type="text" placeholder="$0" />
                <div className="percent-buttons">
                  <button>25%</button>
                  <button>50%</button>
                  <button>75%</button>
                  <button>Max</button>
                </div>
              </div>
              <p className="available">$1.91 available</p>

              <label>Address</label>
              <input type="text" placeholder="Solana address" className='input-solana'/>
              <p className="hint">
                Double-check that the address you type supports Solana assets
              </p>
            </div>

            <div className="modal-footer">
              <button className="close-btn-secondary" onClick={() => setShowModal(false)}>
                Close
              </button>
              <button
  className="next-btn"
  onClick={() => {
    setShowModal(false);        // close cashout modal
    setShowBroadcast(true);     // show broadcasting modal
    setTimeout(() => {
      setShowBroadcast(false);  // hide broadcasting after 2s
      setShowSubmitted(true);   // show submitted modal
    }, 2000);
  }}
>
  Next
</button>

            </div>
          </div>
        </div>
      )}
      {showBroadcast && (
  <div className="modal-overlay">
    <div className="broadcast-modal">
      <div className="broadcast-header">
        <div className="broadcast-status">
          <div className="spinner">
            <img src={vector} alt="spinner" />
          </div>
          <h3>Broadcasting transaction</h3>
        </div>
        <button className="close-btn" onClick={() => setShowBroadcast(false)}>
          ✕
        </button>
      </div>

      <p className="broadcast-info">Sending $1.91 to 0xs8hs...20jf65</p>
    </div>
  </div>
)}
{/* Broadcasting Modal */}
{showBroadcast && (
  <div className="broadcast-overlay">
    <div className="broadcast-box">
      <div className="broadcast-box-header">
        <div className="broadcast-box-left">
          
          <img src={load} alt="broadcast" className="broadcast-icon" />
          <h3 className="broadcast-title">Broadcasting transaction</h3>
        </div>

        <button
          className="broadcast-close"
          onClick={() => setShowBroadcast(false)}
        >
          ✕
        </button>
      </div>

      <p className="broadcast-desc">Sending $1.91 to 0xs8hs...20jf65</p>
    </div>
  </div>
)}


{/* Cashout Submitted Modal */}
{showSubmitted && (
  <div className="modal-overlay">
    <div className="broadcast-modal">
      <div className="broadcast-header">
        <div className="left">
        <img src={tick} alt="tick" style={{height:"20px"}} />
        <h3 style={{gap:"10px"}}>Cash out submitted</h3>
        </div>
        <button className="close-btn" onClick={() => setShowSubmitted(false)}>✕</button>
      </div>
      <p className="broadcast-info">Your transfer has been broadcast</p>

      <div className="submitted-details">
        <div className="detail-row">
          <span>Address</span>
          <span>9Bu2onf83fhhih8cuhc</span>
        </div>
        <div className="detail-row">
          <span>Amount</span>
          <span>$1.91</span>
        </div>
        <div className="detail-row">
          <span>Time</span>
          <span>{new Date().toLocaleString()}</span>
        </div>
      </div>

      <div className="modal-buttons">
        <button className="close-btn-dark" onClick={() => setShowSubmitted(false)}>
          Close
        </button>
        <button
  className="view-btn"
  onClick={() => {
    setShowSubmitted(false);
    setOpenSolscanModal(true);
  }}
>
  View on Solscan
</button>
      </div>
    </div>
  </div>
)}
{/* Solscan Modal */}
{openSolscanModal && (
  <div className="modal-overlay">
    <div className="create-token-modal">
      <div className="modal-header">
        <h3>Create a new token</h3>
        
        <button
          className="close-btn"
          onClick={() => setOpenSolscanModal(false)}
        >
          ✕
        </button>
      </div>
      <p style={{color: "rgba(255, 255, 255, 0.6)",fontSize:"14px"}}>Set up your token. You can finish later in Studio</p>
      <div className="modal-body">
        <label>Name</label>
        <input type="text" placeholder="Enter name of token" />

        <label>Ticker</label>
        <input type="text" placeholder="$TICK" />

        <label>Description</label>
        <textarea placeholder="Enter text here"></textarea>

        <label style={{display:"flex",alignItems:"center",gap:"10px"}}>
          Trading pair currency
          <span className="tooltip-icon" title="Choose your base currency" ><img src={iicon} alt="iicon" /></span>
        </label>
        <select>
          <option>SOL</option>
          <option>USDC</option>
        </select>

        <label>Image</label>
        <div className="image-upload">
          <p>Drop image here or click to upload</p>
        </div>

        <label>Category</label>
        <select>
          <option>Meme</option>
          <option>Utility</option>
          <option>Gaming</option>
        </select>
      </div>

      <div className="modal-footer">
        <button
          className="close-btn-secondary"
          onClick={() => setOpenSolscanModal(false)}
        >
          Close
        </button>
        <button className="next-btn">Launch Project</button>
      </div>
    </div>
  </div>
)}




    </div>
  );
};
