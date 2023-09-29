import axios from "axios";

const api = axios.create({
    baseURL: "https://api.chucknorris.io/",
    timeout: 1000
})

export default api;