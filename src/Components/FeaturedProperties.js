import React from 'react'
import './StyleFiles/FeaturedProperties.css';

const FeaturedProperties = () => {
    return (
      <div className="fp">
        <div className="fpItem">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.9BKMz_BO9Z4rwjlfa9fhfQHaE8&pid=Api&P=0"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Hotel Taj Villa</span>
          <span className="fpCity">Mumbai</span>
          <span className="fpPrice">Starting from 10000</span>
          <div className="fpRating">
            <button>9.8</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.02_u1XiI4TrJDF3eV8dJLwHaFj&pid=Api&P=0"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Nahargarh Hotel</span>
          <span className="fpCity">Ranthambore</span>
          <span className="fpPrice">Starting from 5000</span>
          <div className="fpRating">
            <button>9.3</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.9LouZ_hV9xn57EIbmAjP_QHaEK&pid=Api&P=0"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Chandra Hotel</span>
          <span className="fpCity">Jaipur</span>
          <span className="fpPrice">Starting from 8000</span>
          <div className="fpRating">
            <button>9.5</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.qB1MyTxVa6WsvRhHAS5kLAHaE8&pid=Api&P=0"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Hotel Khayeber</span>
          <span className="fpCity">Kashmir</span>
          <span className="fpPrice">Starting from 12000</span>
          <div className="fpRating">
            <button>9.7</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    );
  };

export default FeaturedProperties
