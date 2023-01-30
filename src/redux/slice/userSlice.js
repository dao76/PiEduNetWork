import { loginThunk } from "@asyncThunk/userAsyncThunk";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        userInfo: {},
        loading: false
    },
    reducers: {
        changeLoading: (state, action) => {
            state.loading = false
        },
        signOut: (state, action) => {
            state.userInfo = {}
            state.isLogin = false
        }
    },
    extraReducers: buidlder => {
        buidlder
            .addCase(loginThunk.pending, (state, action) => {
                state.loading = true
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                if (action.payload.result_code === 1) {
                    state.isLogin = true
                    state.userInfo = action.payload.data
                }
                state.loading = false
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export default userSlice