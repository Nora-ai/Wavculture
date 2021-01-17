import React, { useState } from 'react'
import { postPost } from '../../services/posts'
import './CreatePost.css'

export default function CreatePost (props) {

    const [formData, setFormData] = useState ({
        artist: "",
        livestream_name: "",
        genre: ""
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

    <form onSubmit={handleSubmit}>

        <h3>Submit a Livestream</h3>

        <label>
            <input
                className= "new-post-artist"
                name="artist"
                placeholder=""
                type="text"
                value={formData.artist}
                onChange={handleChange}
            />
        </label>

        <label>
            <input
                className= "new-post-livestream-name"
                name="livesteam-name"
                placeholder=""
                type="text"
                value={formData.livestream_name}
                onChange={handleChange}
            />
        </label>

        <label>
            <input
                className= "new-post-genre"
                name="genre"
                placeholder=""
                type="text"
                value={formData.genre}
                onChange={handleChange}
            />
        </label>

        <button className="new-post-submit">Submit</button>

    </form>

    </>)
}
