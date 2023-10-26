import { ArticleCompleteType } from "@/types"
import axios from "axios"


export const updateArticle = async (data: ArticleCompleteType) => {
    try {
        const apiData = await axios.patch(`${process.env.NEXT_PUBLIC_PETICION_BACK}/article/${data._id}`, data)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}