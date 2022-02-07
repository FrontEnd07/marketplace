import axios from "axios";


const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

$authHost.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('jwtToken')}`
    return config
})

export { $authHost, $host }