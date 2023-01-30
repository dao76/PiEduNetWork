import { callFailed } from "@method/requestResult"
import axiosInstance from "./axios"

export const login = async (data) => {
    try {
        const res = await axiosInstance.post('/api/loginForApp', data)
        return res
    } catch (error) {
        return callFailed()
    }
}
export const sendmail = async (data) => {
    try {
        const res = await axiosInstance.post('/api/otp/sendEmail', data)
        return res
    } catch (error) {
        return callFailed()
    }
}
export const very = async (data) => {
    try {
        const res = await axiosInstance.post('/api/otp/verify', data)
        return res
    } catch (error) {
        return callFailed()
    }
}