import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Box from '@commom/Box'
import InputUser from '@reuse/InputUser'

const Form = ({ oldPassword, setOldPassword, newPassword, setNewPassword, confin, setConfin }) => {
    return (
        <Box paddingHorizontal={25}>
            <Box marginVertical={20}>
                <InputUser
                    text={'Mật Khẩu Cũ'}
                    value={oldPassword}
                    onChangText={setOldPassword}
                    hint={' Old Password'}
                />

                <InputUser
                    text={'Mật Khẩu Mới'}
                    value={newPassword}
                    onChangText={setNewPassword}
                    hint={'New password'}

                />

                <InputUser
                    text={'Xác Nhận Mật Khẩu Mới'}
                    value={confin}
                    onChangText={setConfin}
                    hint={'Confirm Password'}

                />
            </Box>
        </Box>
    )
}

export default Form

const styles = StyleSheet.create({})