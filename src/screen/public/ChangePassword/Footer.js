import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { navigate } from '@navigation/navigationRef'
import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import routes from '@util/routes'
import ButtonUser from '@reuse/ButtonUser'
const Footer = ({ onforgot }) => {
    return (
        <Box width={'100%'} alignEnd paddingHorizontal={25}>
            <ButtonUser onPress={onforgot} text={'Confirm'} />
        </Box>
    )
}

export default Footer

const styles = StyleSheet.create({})