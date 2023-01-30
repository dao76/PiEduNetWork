import axiosInstance from "./axios"

export const getColumnPointByIdMajor = async (id_majorpoint) => {
    return await axiosInstance.post('/api/columnpoint/get_column_point_by_id_major', { id_majorpoint })
}

export const getPointByIdColumnPoint = async (id_columnpoint) => {
    return await axiosInstance.post('/api/pointstudent/get_point_by_id_column_point', { id_columnpoint })
}

export const insertColumnPoint = async (data) => {
    return await axiosInstance.post('/api/columnpoint/insert', data)
}

export const deleteColumnPonit = async (_id) => {
    return await axiosInstance.post('/api/columnpoint/delete', { _id })
}

export const updateManyPointStudent = async (arrPointsStudent) => {
    return await axiosInstance.post('/api/pointstudent/updateMany', arrPointsStudent)
}
