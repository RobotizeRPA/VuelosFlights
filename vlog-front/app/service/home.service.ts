import axios from 'axios'

export const getArticles = async () => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/article/1`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}