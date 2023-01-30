import {
    deleteColumnPonitThunk,
    getColumnPointByIdMajorThunk,
    getPointByIdColumnPointThunk,
    updateManyPointStudentThunk
} from "@asyncThunk/pointAsyncThunk";

const { createSlice } = require("@reduxjs/toolkit");

const pointSlice = createSlice({
    name: 'point',
    initialState: {
        loading: false,
        major: {},
        columnPoints: [],
        columnPointChoose: '',
        pointStudents: []
    },
    reducers: {
        setMajor: (state, action) => {
            state.major = action.payload
        }
    },
    extraReducers: buidlder => {
        buidlder
            .addCase(getColumnPointByIdMajorThunk.fulfilled, (state, action) => {
                if (!action.payload.error) {
                    state.columnPoints = action.payload.data
                }
            })
            .addCase(getPointByIdColumnPointThunk.fulfilled, (state, action) => {
                if (!action.payload.error) {
                    state.pointStudents = action.payload.data
                    state.columnPointChoose = action.payload.id_columnpoint
                }
            })
            .addCase(deleteColumnPonitThunk.fulfilled, (state, action) => {
                if (!action.payload.error) {
                    state.pointStudents = []
                    state.columnPointChoose = ''
                }
            })
            .addCase(updateManyPointStudentThunk.fulfilled, (state, action) => {
                if (!action.payload.error) {
                    state.pointStudents = []
                    state.columnPointChoose = ''
                }
            })
    }
})

export default pointSlice