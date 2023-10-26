import axios from 'axios'


export const getAllAdmin = async () => {
    try {
        const apiData = await axios.get(`${process.env.PETICION_BACK}/article`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}