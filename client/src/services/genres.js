import api from './api-helper'


export const readAllGenres = async () => {
    const resp = await api.get('/genres')
    return resp.data
}

export const readOneGenre = async (id) => {
    const resp = await api.get(`/genres/${id}`)
    return resp.data
}

export const postGenres = async (genreData) => {
    const resp = await api.post('/genres', { genre: genreData })
    return resp.data
}

export const putGenre = async (id, genreData) => {
    const resp = await api.put(`/genres/${id}`, { genre: genreData })
    return resp.data
}

export const destroyGenre = async (id) => {
    const resp = await api.delete (`/genres/${id}`)
    return resp
}

