import axios from "axios"



const fetchCounselors = async () => {
    const response = await axios.get("/api/counselor")
    return response.data
}


const counselorService = { fetchCounselors }

export default counselorService