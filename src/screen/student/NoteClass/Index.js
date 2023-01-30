import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Safe from '@reuse/Safe'
import { getNoteClassByIdClass } from '@service/Noteclass'
import Box from '@commom/Box'
import Item from './Item'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import userSlice from '@slice/userSlice'
import { userInfoSelector } from '@selector/userSelector'

const NoteClass = ({ navigation }) => {

    const userInfo = useSelector(userInfoSelector)
    const id_class = userInfo.id_class._id
    console.log(userInfo.id_class._id);
    const [notification, setNotification] = useState()
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getNoti()
        })

        return () => unsubscribe
    }, [])
    const getNoti = async () => {
        const res = await getNoteClassByIdClass(id_class)

        if (!res.error) {
            setNotification(res.data)
        }
    }
    return (
        <Safe backgroundColor={'#E5E5E5'}>
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
                {userInfo.id_class.name}

            </Text>
            <Text
                style={{
                    color: '#40BFFF',
                    fontSize: 25,
                    marginLeft: 19,
                    fontWeight: 'bold',
                    paddingTop: 3,
                    paddingBottom: 0
                }}
            >
                Ghi chú

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

export default NoteClass

const styles = StyleSheet.create({})