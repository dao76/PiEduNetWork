import AsyncStorage from "@react-native-async-storage/async-storage"
import contants from "@util/contants"

export const fetchPOST = async (path, body) => {
    const token = await AsyncStorage.getItem(contants.TOKEN)
    return await fetch(contants.HOSTING + path, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
}