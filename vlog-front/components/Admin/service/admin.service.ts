import { ArticleCompleteType } from "@/types"
import axios from "axios"


export const updateArticle = async (data: ArticleCompleteType) => {
    try {
        const apiData = await axios.patch(`http://localhost:3001/article/${data._id}`, data)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}