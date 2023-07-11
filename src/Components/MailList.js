import React from 'react'
import './StyleFiles/MailList.css'

const MailList = () => {
    return (
      <div className="mail">
        <h1 className="mailTitle">SAVE TIME, SAVE MONEY</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    )
  }

export default MailList
