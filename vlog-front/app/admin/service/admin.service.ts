import axios from 'axios'


export const getAllAdmin = async () => {
    try {
        const apiData = await axios.get('http://localhost:3001/article')
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}