import axios from "axios"

const registerUser = async (credentials) => {
    const response = await axios.post("/api/auth/register", credentials)
    return response.data
}


const loginUser = async (credentials) => {
    const response = await axios.post("/api/auth/login", credentials)
    localStorage.setItem("user", JSON.stringify(response.data))
    return response.data
}


const fetchQueries = async () => {
    const response = await axios.get("/api/counselor/categories")
    return response.data
}

const becomeCounselor = async (payload) => {

    const options = {
        headers: {
            authorization: `Bearer ${payload.token}`
        }
    }

    const response = await axios.post("/api/counselor", payload, options)
    console.log(response)
    return response.data
}





const authService = {
    loginUser,
    registerUser,
    fetchQueries,
    becomeCounselor
}

export default authService