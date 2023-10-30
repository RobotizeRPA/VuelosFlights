import axios from 'axios'

export const getArticles = async () => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/article/1`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const getArticlesBySection = async (section: string) => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/article/${section}/1`)
        return apiData.data
    } catch (error) {
        console.log(error)   
    }
}