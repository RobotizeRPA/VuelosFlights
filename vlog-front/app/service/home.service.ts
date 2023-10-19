import axios from 'axios'

export const getArticles = async () => {
    try {
        const apiData = await axios.get('http://localhost:3001/article/1')
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}