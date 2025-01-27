import React, { useState } from 'react'
import './Login.css'
import { loginUser } from '../../services/auth'
import { Link } from 'react-router-dom'

export default function Login (props) {
    const [formData, setFormData] = useState({
        username: "",
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
        const userData = await loginUser(formData)
        props.setCurrentUser (userData)
        props.history.push('/')
    }

    return (<>

    <div className="border-form">
        <form className="login-form" onSubmit={handleSubmit}>
            <h3>Login with your e-mail</h3>
            <Link to="/sign-up"><p>Don't have an account? Sign up!</p></Link>
            <label className="login-username-label">
                <input
                    className="login-username-input"
                    type="text"
                    name="username"
                    placeholder="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>
            <label className="login-password-label">
                <input
                    className="login-password-input"
                    type="text"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <button className="login-submit">Login</button>
        </form>
    </div>

    </>)

}