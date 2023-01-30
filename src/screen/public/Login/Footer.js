import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { navigate } from '@navigation/navigationRef'
import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import routes from '@util/routes'
import ButtonUser from '@reuse/ButtonUser'

const Footer = ({ onLogin }) => {
    return (
        <Box width={'100%'} alignEnd paddingHorizontal={25}>
            <Btn onPress={() => navigate(routes.public.FORGOT_PASSWORD)}>
                <Txt>Forgot password</Txt>
            </Btn>

            <ButtonUser text={'Login'} onPress={onLogin} />
        </Box>
    )
}

export default Footer

const styles = StyleSheet.create({})