import axios from 'axios'

const request = axios.create({
    baseURL: '/api',
    headers: "",     //头部
})

export default request