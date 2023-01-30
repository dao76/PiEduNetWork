import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { navigate } from '@navigation/navigationRef'
import Safe from '@reuse/Safe'
import Scroll from '@commom/Scroll'
import Header from './Header'
import { userInfo } from '@hooks/userInfo'
import Box from '@commom/Box'
import Item from './Item'
import routes from '@util/routes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import userSlice from '@slice/userSlice'

const Profile = () => { 
    const dispatch = useDispatch()

    const handleCallPhone = () => {
        const number = userInfo().phone_number
        Linking.openURL(`tel:${number}`)
    }

    const handleSignOut = async () => {
        await AsyncStorage.clear()
        dispatch(userSlice.actions.signOut())
    }

    return (
        <Safe>
            <Scroll flexGrow paddingBottom={150}>
                <Header avatar={false} />
                <Box
                    paddingHorizontal={30}
                    paddingVertical={20}
                    backgroundColor={'white'}
                >
                    <Item title={'ID'} content={userInfo().uid} />
                    <Item title={'Tên'} content={userInfo().name} />
                    <Item title={'Email'} content={userInfo().email} />

                    <TouchableOpacity onPress={handleCallPhone}>
                        <Item title={'SĐT'} content={userInfo().phone_number} />
                    </TouchableOpacity>

                    {(userInfo().role === 'subject_teacher' || userInfo().role === 'main_teacher') &&
                        <Item title={'Chức vụ'} content={'Giáo viên'} />}

                    {(userInfo().role === 'student' || userInfo().role === 'class_monitor') &&
                        <Item title={'Chức vụ'} content={'Học sinh'} />}

                    {userInfo().role === 'parents' &&
                        <Item title={'Chức vụ'} content={'Phụ huynh'} />}

                    <Item title={'Ngày sinh'} content={userInfo().birthday} />
                    <Item title={'Giới tính'} content={userInfo().gender === 1 ? 'Nam' : 'Nữ'} />
                    <Item title={'Mô tả'} content={userInfo().description} />

                    {(userInfo().role === 'student' || userInfo().role === 'class_monitor') &&
                        <TouchableOpacity onPress={() => getAPI(userInfo().id_parent?._id)}>
                            <Item title={'Phụ huynh'} content={userInfo().id_parent?.name} />
                        </TouchableOpacity>}

                    {userInfo().role === 'main_teacher' &&
                        <Item title={'Chủ nhiệm lớp'} content={userInfo().id_class?.name} />}

                    <TouchableOpacity onPress={() => navigate(routes.public.CHANGE_PASSWORD)}>
                        <Item title={'Đổi mật khẩu'} content={'Thay đổi mật khẩu'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSignOut}>
                        <Item title={'Đăng xuất'} content={'Đăng xuất khỏi thiết bị'} />
                    </TouchableOpacity>
                </Box>
            </Scroll>
        </Safe>
    )
}

export default Profile