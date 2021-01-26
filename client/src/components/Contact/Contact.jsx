import React from 'react'
import './Contact.css'

export default function Contact () {

    return (<>

        <div className="contact">
            <h3>Contact us</h3>
            <p>Do you have feedback for us?</p>
            <p>Questions? Concerns?</p>
            <p>Or you just feel like paying us a compliment?</p>
            <p>We would love to hear from you!</p>
        </div>

    
            <form className="contact-form">
                <div className="contact-name-email">
                <input
                    className="contact-input-name"
                    type="text"
                    placeholder="Enter Name"
                />
                <input
                    className="contact-input-email"
                    type="text"
                    placeholder="Enter E-mail"
                />
                </div>
                <input
                    className="contact-input-message"
                    type="text"
                    placeholder="Enter Message"
                />
                <button>Submit</button>
            </form>

        
    </>)
}