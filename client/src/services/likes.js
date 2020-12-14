import api from './api-helper'


export const readAllLikes = async () => {
    const resp = await api.get('/likes')
    return resp.data
}

export const readOneLike = async (id) => {
    const resp = await api.get(`/likes/${id}`)
    return resp.data
}

export const postLike = async (likeData) => {
    const resp = await api.post('/likes', { like: likeData })
    return resp.data
}

export const putLike = async (id, likeData) => {
    const resp = await api.put(`/likes/${id}`, { like: likeData })
    return resp.data
}

export const destroyLike = async (id) => {
    const resp = await api.delete (`/likes/${id}`)
    return resp
}

