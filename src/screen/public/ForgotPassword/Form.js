import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Box from '@commom/Box'
import InputUser from '@reuse/InputUser'

const Form = ({ email, setEmail, newPassword, setNewPassword, codeOtp, setCodeOtp }) => {
    return (
        <Box paddingHorizontal={25}>
            <Box marginVertical={20}>
                <InputUser
                    text={'Email'}
                    value={email}
                    onChangText={setEmail}
                    hint={' your email'}
                />

                <InputUser
                    text={'New password'}
                    value={newPassword}
                    onChangText={setNewPassword}
                    hint={'New password'}

                />

                <InputUser
                    text={'Code otp'}
                    value={codeOtp}
                    onChangText={setCodeOtp}
                    hint={'Code otp'}

                />
            </Box>
        </Box>
    )
}

export default Form

const styles = StyleSheet.create({})