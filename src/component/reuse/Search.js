import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import { goBack } from '@navigation/navigationRef'

const Search = ({ search, setSearch }) => {
    return (
        <Box
            row
            backgroundColor={'white'}
            justifySpaceBetween
            height={60}
            alignCenter
            paddingHorizontal={20}
        >
            <TouchableOpacity onPress={() => goBack()}>
                <Image source={require('@images/back.png')} />
            </TouchableOpacity>
            <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder={'Tìm kiếm'}
                placeholderTextColor={'#666666'}
                style={styles.search}
            />
            <View />
        </Box>
    )
}

export default Search

const styles = StyleSheet.create({
    search: {
        height: 40,
        width: '70%',
        borderBottomWidth: 1,
        borderColor: '#C6C6C6'
    }
})