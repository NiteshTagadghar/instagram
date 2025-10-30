import axios from "axios";


const baseURL = "http://localhost:5000/api/post"


const postApi = axios.create({baseURL})


postApi.interceptors.request.use((config)=>{

    const token = localStorage.getItem("token")

    if(!token) {
        console.log("please log in once again")
        return 
    }

    // Edge case if no headers present
    if(!config.headers) config.headers = {}


    // Add token in headers
    config.headers.Authorization = `Bearer ${token}`

    return config
})


export default postApi