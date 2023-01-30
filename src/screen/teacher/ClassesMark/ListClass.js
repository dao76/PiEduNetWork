import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { navigate } from '@navigation/navigationRef'
import routes from '@util/routes'
import { styled } from '@theme/styled'
import { useDispatch } from 'react-redux'
import pointSlice from '@slice/pointSlice'

const ListClass = ({ data, search }) => {
    const dispatch = useDispatch()

    const filterData = () => data.filter(item => item.id_class.name.toLowerCase().includes(search.toLowerCase()))

    const deleteMajorPoint = (item) => {
        setMajorPointChoose(item)
        setShowModalDelete(true)
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onLongPress={() => deleteMajorPoint(item)}
                onPress={() => {
                    dispatch(pointSlice.actions.setMajor(item))
                    navigate(routes.teacher.MARK_TEACHER)
                }}
                style={styles.itemContainer}
            >
                {item.id_class.img ?
                    <Image
                        style={styles.iconCLass}
                        source={{ uri: item.id_class.img }}
                    /> :
                    <Image
                        style={styles.iconCLass}
                        source={require('@images/classdefault.png')}
                    />
                }

                <View style={styles.textContainer}>
                    <Text style={styles.textName}>{item.id_class.name}</Text>
                    <Text style={styles.textTeaCher}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textClass}>Các lớp đang dạy</Text>
            <FlatList
                data={filterData()}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                contentContainerStyle={{ paddingBottom: 150 }}
            />
        </View>
    )
}

export default ListClass

const styles = StyleSheet.create({
    textContainer: {
        justifyContent: 'center'
    },
    textTeaCher: {
        color: '#73D3F1',
        fontWeight: 'bold'
    },
    textName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    iconCLass: {
        height: 50,
        width: 50,
        margin: 10,
        borderRadius: 10
    },
    itemContainer: {
        backgroundColor: 'white',
        marginVertical: 10,
        flexDirection: 'row',
        borderRadius: 10,
        marginHorizontal: 5,
        ...styled.shadow
    },
    textClass: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10
    },
    container: {
        paddingHorizontal: 20
    }
})