import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { navigate } from '@navigation/navigationRef'
import routes from '@util/routes'
import Box from '@commom/Box'
import { formatDay } from '@method/date'
import { styled } from '@theme/styled'

const Item = ({ item, total }) => {
    return (
        <TouchableOpacity
            onPress={() => navigate(routes.public.ATTENDANCE_HISTORY_DETAIL, { _id: item._id })}
            style={styles.contentItem}
        >
            <Box row alignCenter>
                <Image
                    style={{ marginRight: 5 }}
                    source={require('@images/userblue.png')}
                />
                <Text style={{ marginRight: 10 }}>{total - item.absent.length}</Text>
                <Image
                    style={{ marginRight: 5 }}
                    source={require('@images/userred.png')}
                />
                <Text>{item.absent.length}</Text>
            </Box>

            <Box row alignCenter>
                <Image
                    style={styles.oclock}
                    source={require('@images/oclock.png')}
                />
                <Text style={styles.date}>{formatDay(item.createdAt)}</Text>
            </Box>
        </TouchableOpacity>
    )
}

export default Item

const styles = StyleSheet.create({
    date: {
        color: '#808994',
        fontSize: 12,
        fontWeight: 'bold'
    },
    oclock: {
        width: 15,
        height: 15,
        marginRight: 5
    },
    contentItem: {
        ...styled.shadow,
        backgroundColor: 'white',
        elevation: 6,
        margin: 5,
        width: '45%',
        flexWrap: 'wrap',
        padding: 10,
        height: 75,
        justifyContent: 'space-between',
        borderRadius: 10
    }
})