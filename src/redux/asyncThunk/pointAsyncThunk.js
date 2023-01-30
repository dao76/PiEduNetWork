import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteColumnPonit, getColumnPointByIdMajor, getPointByIdColumnPoint, updateManyPointStudent } from "@service/pointService";

export const getColumnPointByIdMajorThunk = createAsyncThunk('point/getColumnPointByIdMajor', async (idMajor) => {
    const res = await getColumnPointByIdMajor(idMajor)
    return res
})

export const deleteColumnPonitThunk = createAsyncThunk('point/deleteColumnPonit', async (_id) => {
    const res = await deleteColumnPonit(_id)
    return res
})

export const getPointByIdColumnPointThunk = createAsyncThunk('point/getPointByIdColumnPoint', async (id_columnpoint) => {
    const res = await getPointByIdColumnPoint(id_columnpoint)
    return { ...res, id_columnpoint }
})

export const updateManyPointStudentThunk = createAsyncThunk('point/updateManyPointStudent', async (arrPointsStudent) => {
    const res = await updateManyPointStudent(arrPointsStudent)
    return res
})


