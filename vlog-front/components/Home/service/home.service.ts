import axios from "axios"


export const getMoreArticles = async (page: string) => {
    try {
        const apiData = await axios.get(`${process.env.NEXT_PUBLIC_PETICION_BACK}/article/${page}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}