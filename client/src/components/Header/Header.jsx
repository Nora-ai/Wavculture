import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

export default function Header (props) {
    return (<>
        <div className = "header-block">
            <div className = "header-left">
                <header className="dropdown-header">
                    <strong>WAVCULTURE</strong>
                    <ul className= "dropdown-categories">
                        <li className= "dropdown-category">
                            <span>Menu</span>
                            <ul className="dropdown-menu">
                                <Link to='/'><li>Home</li></Link>
                                <Link to='/about-us'><li>About Us</li></Link>
                                <Link to='/contact-us'><li>Contact Us</li></Link>
                                <li>Mailing List</li>
                                <Link to='/resources'><li>Resources</li></Link>
                                <Link to='/faq'><li>FAQ</li></Link>
                                <li>Admin Login</li>
                            </ul>
                        </li>
                    </ul>
                </header>
            </div>
            <div className = "header-right">
                <button>Sign Up</button>
                <button>Log In</button>
            </div>
        </div>
    </>)
}


