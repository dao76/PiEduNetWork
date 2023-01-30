import { StyleSheet } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import InputUser from '@reuse/InputUser'

const Form = ({ email, setEmail, password, setPassword }) => {
    return (
        <Box paddingHorizontal={25}>
            <Box marginVertical={20}>
                <InputUser
                    text={'Email'}
                    value={email}
                    onChangText={setEmail}
                    hint={'Enter your email'}
                />

                <InputUser
                    text={'Password'}
                    value={password}
                    onChangText={setPassword}
                    hint={'Enter your password'}
                    security={true}
                />
            </Box>
        </Box>
    )
}

export default Form

const styles = StyleSheet.create({})