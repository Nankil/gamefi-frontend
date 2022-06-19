import axios from 'axios'

var baseURL = 'http://geneplayer.io/api'

export const get_request = axios.create({
    baseURL: baseURL,
    headers: {},     //头部
})

export const post_request = axios.create({
    baseURL: baseURL,
    headers: {'content-type': 'application/x-www-form-urlencoded'},     //头部
})
