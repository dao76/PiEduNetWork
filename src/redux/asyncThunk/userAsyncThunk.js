import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "@service/userSerivce";
import contants from "@util/contants";

export const loginThunk = createAsyncThunk('user/login', async (data) => {
    const res = await login(data)
    if (res.result_code === 1) {
        await AsyncStorage.setItem(contants.TOKEN, res.data.token)
        const rememberme = { email: res.data.email, password: data.password }
        await AsyncStorage.setItem(contants.REMEMBER, JSON.stringify(rememberme))
    }
    return res
})
