import React from 'react'
import './Header.css'
//import {Link} from 'react-router-dom'

export default function Header (props) {
    return (<>
        <div className = "header-block">
            <div className = "header-left">
                <p>menu</p>
                <p>wavculture</p>
            </div>
            <div className = "header-right">
                <button>Sign Up</button>
                <button>Log In</button>
            </div>
        </div>
    </>)
}


