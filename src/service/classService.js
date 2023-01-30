import { callFailed } from "@method/requestResult"
import axiosInstance from "./axios"

export const getClassById = async (_id) => {
    try {
        const res = await axiosInstance.get('/api/class/get/' + _id)
        return res
    } catch (error) {
        return callFailed()
    }
}

export const getAllClass = async () => {
    return await axiosInstance.get('/api/class/getAll')
}

export const getCalendar = async (id_class) => {
    try {
        return await axiosInstance.get('/api/class/calendar/' + id_class)
    } catch (error) {
        return callFailed()
    }
}

export const updateClass = async (classed) => {
    try {
        return await axiosInstance.post('/api/class/updateClass', classed)
    } catch (error) {
        return callFailed()
    }
}