import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import contants from '@util/contants';

const axiosInstance = axios.create({
  baseURL: contants.HOSTING,
});
axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem(contants.TOKEN);
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return config;
  },
  err => Promise.reject(err),
);
axiosInstance.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err),
); // callback
export default axiosInstance;
