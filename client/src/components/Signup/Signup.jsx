import React, { useState } from 'react'
import { registerUser } from '../../services/auth'
import './Signup.css'
import { Link } from 'react-router-dom'

export default function Signup (props) {


    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target 
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = await registerUser(formData)
        props.history.push('/login')
    }

    return (<>
<div className="border-form">
    <form className="signup-form" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label>
            <input
                className="signup-username"
                type="text"
                name="username"
                placeholder="username"
                value={FormData.username}
                onChange={handleChange}
            />
        </label>

        <label>
            <input
                className="signup-email"
                type="text"
                name="email"
                placeholder="email"
                value={FormData.email}
                onChange={handleChange}
            />
        </label>

        <label>
            <input
                className="signup-password"
                type="password"
                name="password"
                placeholder="password"
                value={FormData.password}
                onChange={handleChange}
            />
        </label>
       
        <button className= "signup-submit">Sign Up</button>
    </form>
    <Link to="/login"><p>Already have an account? Login</p></Link>
    </div>

    </>)
}