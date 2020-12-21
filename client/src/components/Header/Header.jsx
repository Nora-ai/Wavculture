import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

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
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Mailing List</li>
                                <li>Resources</li>
                                <li>FAQ</li>
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


