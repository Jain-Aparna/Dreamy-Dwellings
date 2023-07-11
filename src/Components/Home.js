import React from 'react'
import Navbaar from './Navbaar'
import Header from './Header'
import Featured from './Featured'
import './StyleFiles/Home.css'
import PropertyList from './PropertyList'
import FeaturedProperties from './FeaturedProperties'
import MailList from './MailList'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Navbaar/>
      <Header/>
      <div className="homeContainer">
         <Featured/> 
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
