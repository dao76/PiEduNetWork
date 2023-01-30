import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Box from '@commom/Box'
import { styled } from '@theme/styled'

const ItemClass = ({ item, onPress }) => {
    return (
        <TouchableOpacity
            onPress={() => onPress(item)}
            style={styles.container}
        >
            <Box row alignCenter>
                {item.img ?
                    <Image
                        style={styles.img}
                        source={{ uri: item.img }}
                    /> :
                    <Image
                        style={styles.img}
                        source={require('@images/classdefault.png')}
                    />
                }
                <Box>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.id}>{item.teacher?.name}</Text>
                </Box>
            </Box>
        </TouchableOpacity>
    )
}

export default ItemClass

const styles = StyleSheet.create({
    id: {
        fontWeight: 'bold',
        color: '#9C9C9C'
    },
    name: {
        fontWeight: 'bold',
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 5,
    },
    container: {
        ...styled.shadow,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        elevation: 3,
        height: 60,
        marginVertical: 7,
    }
})