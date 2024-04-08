import Logo from '../images/hiking logo.png'
import React, { useState } from 'react'
import Login from '../auth_wrapper/Login'
import Register from '../auth_wrapper/Register'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from './Provider'

function Header() {
    const [popup, setPopup] = useState(null)
    const { isAuthenticated } = useContext(AuthContext)
    
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
               {!isAuthenticated &&  <div className="header_buttons">
                    <Link to="/register" className="header_button">Sign Up</Link>
                    <Link to='/login' className="header_button">Log In</Link>
                </div>  }
            </div>
            {popup === 'Login' && <Login onClose={handleCloseClick} />}
            {popup === 'Register' && <Register onClose={handleCloseClick} />}
        </>
    )
  }
  
  export default Header