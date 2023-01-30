import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Box from '@commom/Box'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { goBack, navigate } from '@navigation/navigationRef'
import routes from '@util/routes'

const Search = ({ search, setSearch, data }) => {
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
            <TouchableOpacity onPress={() => navigate(routes.public.ATTENDANCE_HISTORY, { id_class: data.attendaces.id_class })}>
                <Image
                    style={styles.oclock}
                    source={require('@images/oclockblack.png')}
                />
            </TouchableOpacity>
        </Box>
    )
}

export default Search

const styles = StyleSheet.create({
    oclock: {
        width: 20,
        height: 20
    },
    search: {
        height: 40,
        width: '70%',
        borderBottomWidth: 1,
        borderColor: '#C6C6C6'
    }
})