import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Safe from '@reuse/Safe'
import { getNotiByIDUser } from '@service/NotiSerivce'
import Box from '@commom/Box'
import Item from './Item'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import userSlice from '@slice/userSlice'
import { userInfoSelector } from '@selector/userSelector'

// import { userInfo } from '@hooks/userInfo'
const Notification = ({ navigation }) => {

    const userInfo = useSelector(userInfoSelector)
    console.log(userInfo._id);
    const [notification, setNotification] = useState()
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getNoti()
        })

        return () => unsubscribe
    }, [])
    const getNoti = async () => {
        const res = await getNotiByIDUser(userInfo._id)

        if (!res.error) {
            setNotification(res.data)
        }
    }
    return (
        <Safe backgroundColor={'white'}>
            <Text
                style={{
                    color: '#40BFFF',
                    fontSize: 25,
                    marginLeft: 19,
                    fontWeight: 'bold',
                    paddingTop: 10,
                    paddingBottom: 5
                }}
            >
                Thông báo

            </Text>

            {notification &&
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 300 }}
                    showsVerticalScrollIndicator={false}
                >
                    <SafeAreaView>
                        <Box paddingHorizontal={23} flex={1}>
                            <ScrollView>
                                {notification.map(item => <Item key={item._id} item={item} />)}
                            </ScrollView>
                        </Box>
                    </SafeAreaView>
                </ScrollView>
            }

        </Safe>

    )
}

export default Notification

const styles = StyleSheet.create({})