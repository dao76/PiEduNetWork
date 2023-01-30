import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'

const Item = ({ title, content }) => {
    return (
        <Box
            borderBottomWidth={1}
            borderColor={'#C6C6C6'}
            marginBottom={10}
        >
            <Txt
                color={'#4A4A4A'}
                bold
                size={16}
            >
                {title}
            </Txt>

            <Txt
                color={'#666666'}
                size={14}
                marginBottom={10}
            >
                {content}
            </Txt>
        </Box>
    )
}

export default Item

const styles = StyleSheet.create({})