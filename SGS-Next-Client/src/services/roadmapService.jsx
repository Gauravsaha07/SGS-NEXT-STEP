import axios from "axios"

const generateRoadmap = async (payload) => {

    const options = {
        headers: {
            authorization: `Bearer ${payload.token}`
        }
    }


    const response = await axios.post("/api/ai/roadmap", payload, options)
    console.log(response)
    return response.data


}


const roadmapService = { generateRoadmap }

export default roadmapService