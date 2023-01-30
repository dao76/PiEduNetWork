import { StyleSheet } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'

const ItemLesson = ({ item, index }) => {
    return (
        <Box row>
            <Txt>{index + 1}. </Txt>
            <Txt>{item}</Txt>
        </Box>
    )
}

export default ItemLesson

const styles = StyleSheet.create({})