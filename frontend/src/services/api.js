import axios from 'axios'
const URL = 'http://localhost:5000'
export const getJobs = async() => {
    try {
        const response = await axios.get(`${URL}/jobs/getjobs`)
        return response.data;
    } catch (error) {
        console.log("Error while calling getjobs api")
    }
}