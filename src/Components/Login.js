
import React, { useState } from 'react';
import './StyleFiles/Login.css'
import AfterLogin from './AfterLogin'

const Login = () => {
    const[changePage, setChangePage]=useState(false);

    const handleOnClick=()=>{
        setChangePage(true);
    }
    return (
        <>
        <section className="login">
            <div >
                <div>
                 
                 <div>
                    <form className="register-form" id="register-form">

                        <div className="form-group">
                            <label htmlFor="name">
                            </label>
                            <input type="text" name="name" id="name" autocomplete="off" placeholder="Your name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">
                            </label> 
                            <input type="email" name="email" id="email" autocomplete="off" placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <label html For="password">
                            </label> 
                            <input type="password" name="password" id="password" autocomplete="off" placeholder="Your Password"/>
                        </div>
                        <div className="sub">

                           <input type="submit" name="signup id="signup className="form-submit" value="Login" onClick={handleOnClick}/>

                        </div>
                    </form>
                 </div>
                </div>
            </div>
    </section>
    {changePage && <AfterLogin/>}
    </>
    )
}    
export default Login

