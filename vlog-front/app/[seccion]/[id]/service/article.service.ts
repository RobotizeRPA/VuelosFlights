import axios from "axios"

export const getArticle = async (id: string) => {
    try {
        const apiAdata = await axios.get(`http://localhost:3001/article/article/${id}`)
        return apiAdata.data
    } catch (error) {
        console.log(error)
    }
}