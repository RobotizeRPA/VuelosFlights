import axios from 'axios'

export const getSearchArticles = async (keyword: string) => {
    try {
        const apiData = await axios.get(`${process.env.NEXT_PUBLIC_PETICION_BACK}/search/${keyword}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}