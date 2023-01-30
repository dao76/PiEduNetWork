import { callFailed } from "@method/requestResult"
import axiosInstance from "./axios"

export const getAllNewsSchool = async () => {
    try {
        const res = await axiosInstance.get('/api/news/getForSchool')
        return res
    } catch (error) {
        return callFailed()
    }
}