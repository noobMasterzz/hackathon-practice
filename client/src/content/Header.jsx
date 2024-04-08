import Logo from '../images/hiking logo.png'
import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

function Header() {
    const [popup, setPopup] = useState(null)
    
    const handleClickLog = () => {

        if (popup === 'Login') {
            setPopup(null)
        }
        else {
            setPopup('Login')
        }
    }

    const handleClickReg = () => {
        if (popup === 'Register') {
            setPopup(null)
        }
        else {
            setPopup('Register')
        }
    }

    const handleCloseClick = () => {
        setPopup(null)
    }

    return (
        <>
            <div className="header">
                <img src={Logo} className="header_logo"/>
                <div className="header_titles">
                    <h1 className="header_title">Hike4Nature</h1>
                    <h3 className="header_subtitle">Explore. Preserve. Thrive.</h3>
                </div>
                <div className="header_buttons">
                    <button className="header_button" onClick={handleClickReg} >Sign Up</button>
                    <button className="header_button" onClick={handleClickLog} >Log In</button>
                </div>  
            </div>
            {popup === 'Login' && <Login onClose={handleCloseClick} />}
            {popup === 'Register' && <Register onClose={handleCloseClick} />}
        </>
    )
  }
  
  export default Header