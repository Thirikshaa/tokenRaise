import React, { useState } from 'react'
import './Token.css'
import vector from '../assets/Vector.png'
import vector3 from '../assets/Vector3.png'
import mask from '../assets/Mask.png'


export const Creation = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const toggleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  return (
    <div>
        
        
        <div className="main-gradient"></div>
        <h4 style={{fontWeight:"800",fontSize:"32px",display:"flex",justifyContent:"center",marginBottom:"32px"}}>Token Creation</h4>
        <div className="main-div">
        <div className="token-creation-container">
    

      <form className="token-form">
        {/* Name + Ticker */}
        <div className="form-row">
          <div className="form-group">
            <label style={{display:"flex"}} className='label'>Name</label>
            <input type="text" placeholder="Enter name of token" className='form-input' />
          </div>
          <div className="form-group">
            <label style={{display:"flex"}} className='label'>Ticker</label>
            <input type="text" placeholder="Enter ticker of token" className='form-input' />
          </div>
        </div>

        {/* Trading pair + Category */}
        <div className="form-row">
          <div className="form-group">
            <label className='label' style={{display:"flex",gap:"5px",alignItems:"center"}}>
              Trading pair currency 
              <span className="info-icon">
                <img src={vector} alt="" style={{marginTop:"5px"}} />
                <div className="tooltip">
                  <p>Pre-graduation purchases use SOL. At 100K market cap your token deploys to Meteora with the currency you select here and this cannot be changed</p>
                </div>
              </span>
            </label>
            <select className='form-input' style={{paddingRight:"10px"}}>
              <option>SOL-USDC</option>
            </select>
          </div>
          <div className="form-group">
            <label className='label' style={{display:"flex"}}>Category</label>
            <div className='relative'>

            <select className='form-input'>
              <option>Select a category</option>
            </select>


            </div>
          </div>
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea placeholder="Enter text here" className='form-input' style={{width:"100%",height:"100px",background: "#121314"}}></textarea>
        </div>

        {/* Image Upload */}
        <div className="form-group">
          <label className='label'>Image</label>
          <div className="upload-box">
            <button type="button" className="upload-btn">Upload</button>
          </div>
        </div>

        {/* Initial Buy */}
        <div className="form-group">
          <label className='label'>Initial buy</label>
          <div className="form-input input-split">
            <button type="button" className="sol-btn" style={{color:"white"}}>15 SOL</button>
            <span className="token-amount">414.13 tokens</span>
          </div>
          <small className="note">
            Make sure to leave ~0.05 SOL for tx fees
          </small>

          <div className="price-row">
            <span style={{display:"flex",gap:"5px"}}><img src={vector3} alt="SOL" height="20px" /> 0 SOL</span>
            <span style={{marginTop:"-3px"}}>$0</span>
          </div>
        </div>

        {/* More Options Toggle */}
        <div className="more-options" onClick={toggleMoreOptions}>
          <span style={{display:"flex",gap:"5px",alignItems:"center"}}>
            {showMoreOptions ? 'Less options' : 'More options'} 
            <img src={mask} alt="" style={{height:"5px",width:"11px", transform: showMoreOptions ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease'}} />
          </span>
        </div>

        {/* More Options Section */}
        {showMoreOptions && (
          <div className="more-options-section">
            <div className="form-row">
              <div className="form-group additional-option">
                <label className='label'>Website Link (Optional)</label>
                <input type="text" placeholder="Enter liquidity amount" className='form-input' />
              </div>
              <div className="form-group additional-option">
                <label className='label'>X link (Optional)</label>
                <input type="text" placeholder="Enter total supply" className='form-input' />
              </div>
            </div>
            
            {/* <div className="form-row">
              <div className="form-group additional-option">
                <label className='label'>Tax Percentage</label>
                <input type="text" placeholder="Enter tax %" className='form-input' />
              </div>
              <div className="form-group additional-option">
                <label className='label'>Max Wallet</label>
                <input type="text" placeholder="Enter max wallet %" className='form-input' />
              </div>
            </div> */}
            
            {/* <div className="form-group additional-option">
              <label className='label'>Project Website</label>
              <input type="text" placeholder="Enter website URL" className='form-input' />
            </div>
            
            <div className="form-group additional-option">
              <label className='label'>Social Media Links</label>
              <textarea placeholder="Enter social media links" className='form-input' style={{width:"100%",height:"80px",background: "#121314"}}></textarea>
            </div> */}
          </div>
        )}

        {/* Launch Button */}
        <div className="launch-btn-container">
            <button type="submit" className="launch-btn">
            Launch Project
            </button>
        </div>
        
      </form>
      
    </div>
    <div className="warning">
            <p>Summon is not an exchange and does not provide financial advice, endorsements, or investment recommendations. Crypto trading involves risks and is for entertainment purposes only.</p>
        </div>
        </div>
        
    </div>
  )
}