import React from 'react'
import './StyleFiles/SearchItems.css'
// import Menu from './MenuData';

const SearchItems = ({menuData}) => {
    return (
      <>
      {
         menuData.map((currentElement)=>{

          const {Title, location,Description, cancellation, quality, rating, pakage, facility,detail, price, taxes, available, image}=currentElement;
          return(
            <>
               <div className="searchItem">
        <img
          src={image}
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">{Title}</h1>
          <span className="siDistance">{location}</span>
          <span className="siTaxiOp">{pakage}</span>
          <span className="siSubtitle">
            {facility}
          </span>
          <span className="siFeatures">
            {detail}
          </span>
          <span className="siCancelOp">{Description} </span>
          <span className="siCancelOpSubtitle">
            {cancellation}
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>{quality}</span>
            <button>{rating}</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">{price}</span>
            <span className="siTaxOp">{taxes}</span>
            <button className="siCheckButton">{available}</button>
          </div>
        </div>
      </div>
            </>
              );
            })
          };
             
    </>
  );
};
       
     
   
  

export default SearchItems
