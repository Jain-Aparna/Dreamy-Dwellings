import React from 'react'
import './StyleFiles/Featured.css';

const Featured = () => {
    return (
      <div className="featured">
        <div className="featuredItem">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.0SDd5Ua-Ijze9hMNoJwUdwHaFA&pid=Api&P=0"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Kashmir</h1>
            <h2>123 properties</h2>
          </div>
        </div>
        
        <div className="featuredItem">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.I76R5zy4y0hLPRSRBNA4ZgHaEU&pid=Api&P=0"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Sawai Madhopur</h1>
            <h2>533 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.uHq1l5Kpwy5zjO1bDKWShAHaEK&pid=Api&P=0"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Kerala</h1>
            <h2>532 properties</h2>
          </div>
        </div>
      </div>
    );
  };

export default Featured
