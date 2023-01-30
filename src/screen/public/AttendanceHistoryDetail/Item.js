import { StyleSheet, Switch, Text, View, Image } from 'react-native'
import React from 'react'
import Box from '@commom/Box'

const Item = ({ item }) => {
    return (
        <Box style={styles.container} >
            <Box row alignCenter>
                {item.img ?
                    <Image
                        style={styles.img}
                        source={{ uri: item.img }}
                    /> :
                    <Image
                        style={styles.img}
                        source={require('@images/account.png')}
                    />
                }
                <Box>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.id}>{item.uid}</Text>
                </Box>
            </Box>
            <Switch
                trackColor={{ false: "#FF0000", true: "#3EEB45" }}
                thumbColor={item.present ? "#E8F5E9" : "#E8F5E9"}
                ios_backgroundColor="#3e3e3e"
                value={item.present}
            />
        </Box>
    )
}

export default Item

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
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        elevation: 3,
        height: 60,
        marginVertical: 7
    }
})