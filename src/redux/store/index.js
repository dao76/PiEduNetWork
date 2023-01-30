import { configureStore } from "@reduxjs/toolkit";
import pointSlice from "@slice/pointSlice";
import userSlice from "../slice/userSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        point: pointSlice.reducer
    }
})

export default store