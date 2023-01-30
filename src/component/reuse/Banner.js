import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Img from '@commom/Img'
import Box from '@commom/Box'
import Txt from '@commom/Txt'

const Banner = ({ text }) => {
    return (
        <Box>
            <Img
                width={'100%'}
                source={require('@images/banner.png')}
            />
            <Txt
                marginTop={20}
                marginLeft={20}
                size={25}
                bold
            >
                {text}
            </Txt>
        </Box>
    )
}

export default Banner

const styles = StyleSheet.create({})