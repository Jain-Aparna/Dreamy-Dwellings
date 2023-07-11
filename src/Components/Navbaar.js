import React,{useState} from 'react';
import './StyleFiles/Navbaar.css';
import Login from './Login'
// import { Register } from './Register';

function Navbaar() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };
  return (
    <>
      <div className="navbar">
      <div className="navContainer">
        <span className="logo">DreamyDwellings</span>
        <div className="navItems">
          <button className="navButton" onClick={handleLoginClick}>Login</button>
        </div>
      </div>
    </div>
     {showLogin && <Login />}
    </>
  )
}

export default Navbaar
