import { callFailed } from "@method/requestResult"
import axiosInstance from "./axios"
export const getNotiByIDUser = async (id) => {
    try {
        const res = await axiosInstance.get('/api/notification/getByIdUser/' + id)

        return res
    } catch (error) {
        return callFailed()
    }
}