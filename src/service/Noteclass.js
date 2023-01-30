import { callFailed } from "@method/requestResult"
import axiosInstance from "./axios"
export const getNoteClassByIdClass = async (id_class) => {
    try {
        const res = await axiosInstance.get('/api/news/getForClass/' + id_class)

        return res
    } catch (error) {
        return callFailed()
    }
}