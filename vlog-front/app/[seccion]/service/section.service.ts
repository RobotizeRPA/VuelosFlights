import { vMoreArticles } from "@/types"
import axios from "axios"

export const getArticleBySection = async (section: string) => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/article/${section}/1`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export const getMoreArticles = async (data: vMoreArticles) => {
    try {
        const apiData = await axios.get(`${process.env.NEXT_PUBLIC_PETICION_BACK}/article/${data.section}/${data.page}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}