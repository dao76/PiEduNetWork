import { StyleSheet } from 'react-native'
import React from 'react'
import Txt from '@commom/Txt'
import Box from '@commom/Box'
import Lesson from './Lesson'

const ItemDay = React.forwardRef(( props, ref ) => {
    const { item, onEditPoint } = props
    return (
        <Box style={[styles.button]}>
            <Txt numberOfLines={1}>{item.day}</Txt>
            <Lesson ref={ref} data={item.data} day={item} onEditPoint={onEditPoint} />
        </Box>
    )
})

export default ItemDay

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        marginTop: 5,
        marginEnd: 5,
        padding: 10,
        borderColor: '#40BFFF',
    }
})