import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Txt from '@commom/Txt'
import Img from '@commom/Img'
import { styled } from '@theme/styled'
import { navigate } from '@navigation/navigationRef'

const ItemFeature = ({ item, width, classInfo }) => {
    return (
        <TouchableOpacity
            onPress={() => navigate(item.screen, { classInfo })}
            style={[styles.container, width && { width: width }]}>
            <Img source={item.icon} style={styles.icon} />
            <Txt center bold>
                {item.name}
            </Txt>
        </TouchableOpacity>
    )
}

export default ItemFeature

const styles = StyleSheet.create({
    icon: {
        width: 50,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    container: {
        margin: 5,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        ...styled.shadow
    },
})