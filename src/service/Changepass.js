import { callFailed } from "@method/requestResult"
import axiosInstance from "./axios"
export const Changepassword = async (data) => {
    try {
        const res = await axiosInstance.post('/api/user/changepass', data)
        return res
    } catch (error) {
        return callFailed()
    }
}