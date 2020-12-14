import React from 'react'
import './Footer.css'

export default function Footer (props) {
    return (<>
    <div className = "footer-block">
        <div className = "footer-left">
            <h3>Wavculture</h3>
            <p>Where artists come to connect with fans</p>
            <p>INSERT SOCIAL LOGOS</p>
            <p>@2020 | Wavculture | New York, NY</p>

        </div>

        <div className = "footer-right">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>Resources</p>
            <p>Submit a Livestream</p>
            <p>Mailing List</p>
            <p>Admin Login</p>
        </div>
    </div>
    </>)
}

