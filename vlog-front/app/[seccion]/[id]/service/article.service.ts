import axios from "axios"

export const getArticle = async (id: string) => {
    try {
        const apiAdata = await axios.get(`${process.env.PETICION_BACK}/article/article/${id}`)
        return apiAdata.data
    } catch (error) {
        console.log(error)
    }
}

export const getSectionArticles = async (section: string) => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/article/${section}/1`)
        console.log
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}