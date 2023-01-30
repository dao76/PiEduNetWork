import axiosInstance from "./axios"

export const attendaces = async (id_class) => {
    return await axiosInstance.get('/api/attendaces/check/' + id_class)
}

export const updateAttendances = async (data) => {
    return await axiosInstance.post('/api/attendaces/update', data)
}

export const createNotfication = async (notifications) => {
    return await axiosInstance.post('/api/notification/addMany', { notifications })
}

export const historyAttendances = async (id) => {
    return await axiosInstance.get('/api/attendaces/' + id)
}

export const detailAttendaces = async (id) => {
    return await axiosInstance.get('/api/attendaces/detail/' + id)
}