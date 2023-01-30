import { callFailed } from "@method/requestResult"
import axiosInstance from "./axios"

export const getMajorPointByIdTeacher = async (id_teacher) => {
    try {
        const res = await axiosInstance.post('/api/majorPoint/getMajorPointByIdTeacher', id_teacher)
        return res
    } catch (error) {
        return callFailed()
    }
}