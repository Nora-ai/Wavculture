import React, { useState } from 'react'
import { postPost } from '../../services/posts'
import './CreatePost.css'

export default function CreatePost (props) {

    const [formData, setFormData] = useState ({
        artist: "",
        livestream_name: "",
        genre: "",
        date: "",
        time: "",
        location: "",
        image_link: "",
        livestream_link: "",
        instagram: "",
        linktree: "",
        description: "",
        festival: "",
        recurring: ""
    })

    const handleChange = (e) => {
        const { name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = await postPost(formData)
        props.setPosts([
            ...props.posts,
            newPost
        ])
        props.history.push('/')
    }

    return (<>

    <form onSubmit={handleSubmit} className="livestream-form">

        <h3>Submit a Livestream</h3>

        
        <label className="label-artist">
            <p>Artist</p>
            <input
                className= "new-post-artist"
                name="artist"
                placeholder=""
                type="text"
                value={formData.artist}
                onChange={handleChange}
            />
        </label>
    
        <label className="label-ls-name">
            <p>Livestream Name</p>
            <input
                className= "new-post-livestream-name"
                name="livesteam-name"
                placeholder=""
                type="text"
                value={formData.livestream_name}
                onChange={handleChange}
            />
        </label>

        <label className="label-genre">
            <p>Genre</p>
            <input
                className= "new-post-genre"
                name="genre"
                placeholder=""
                type="text"
                value={formData.genre}
                onChange={handleChange}
            />
        </label>

        <label className="label-date">
            <p>Date</p>
            <input
                className= "new-post-date"
                name="date"
                placeholder=""
                type="date"
                value={formData.date}
                onChange={handleChange}
            />
        </label>

        <label className="label-time">
            <p>Time</p>
            <input
                className= "new-post-time"
                name="time"
                placeholder=""
                type="time"
                value={formData.time}
                onChange={handleChange}
            />
        </label>

        <label className="label-location">
            <p>Location</p>
            <input
                className= "new-post-location"
                name="location"
                placeholder=""
                type="text"
                value={formData.location}
                onChange={handleChange}
            />
        </label>

        <label className="label-image-link">
            <p>Image Link</p>
            <input
                className= "new-post-image-link"
                name="image-link"
                placeholder=""
                type="url"
                value={formData.image_link}
                onChange={handleChange}
            />
        </label>

        <label className="label-ls-link">
            <p>Livestream Link</p>
            <input
                className= "new-post-livestream-link"
                name="livetream-link"
                placeholder=""
                type="url"
                value={formData.livesteam_link}
                onChange={handleChange}
            />
        </label>

        <label className="label-instagram">
            <p>Instagram</p>
            <input
                className= "new-post-instagram"
                name="instagram"
                placeholder=""
                type="url"
                value={formData.instagram}
                onChange={handleChange}
            />
        </label>

        <label className="label-linktree">
            <p>Linktree</p>
            <input
                className= "new-post-linktree"
                name="linktree"
                placeholder=""
                type="url"
                value={formData.linktree}
                onChange={handleChange}
            />
        </label>

        <label className="label-description">
            <p>Description</p>
            <input
                className= "new-post-description"
                name="description"
                placeholder=""
                type="text"
                value={formData.description}
                onChange={handleChange}
            />
        </label>

        <label className="label-festival">
            <p>Festival</p>
            <input
                className= "new-post-festival"
                name="festival"
                placeholder=""
                type="checkbox"
                value={formData.festival}
                onChange={handleChange}
            />
        </label>

        <label className="label-recurring">
            <p>Recurring</p>
            <input
                className= "new-post-recurring"
                name="recurring"
                placeholder=""
                type="checkbox"
                value={formData.recurring}
                onChange={handleChange}
            />
        </label>

        <button className="new-post-submit">Submit</button>

    </form>

    </>)
}
