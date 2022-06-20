import axios from 'axios'

var baseURL = '/api'

export const get_request = axios.create({
    baseURL: baseURL,
    headers: {},     //头部
})

export const post_request = axios.create({
    baseURL: baseURL,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },     //头部
})
