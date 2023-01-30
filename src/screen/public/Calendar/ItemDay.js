import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Txt from '@commom/Txt'
import Box from '@commom/Box'
import Lesson from './Lesson'

const ItemDay = ({ item, dayChoose, setDayChoose }) => {
    return (
        <TouchableOpacity
            onPress={() => setDayChoose(item._id)}
            style={[
                styles.button,
                { borderColor: item._id === dayChoose ? '#40BFFF' : '#E7E7E7' }
            ]}
        >
            <Txt numberOfLines={1}>{item.day}</Txt>
            {item._id === dayChoose &&
                <Lesson data={item.data} />
            }
        </TouchableOpacity>
    )
}

export default ItemDay

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        marginTop: 5,
        marginEnd: 5,
        padding: 10,
        borderColor: '#E7E7E7',
    }
})