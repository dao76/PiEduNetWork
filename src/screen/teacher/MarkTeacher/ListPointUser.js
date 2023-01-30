import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ItemPointUser from './ItemPointUser'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { pointStudents } from '@hooks/point'
import { navigate } from '@navigation/navigationRef'
import routes from '@util/routes'

const ListPointUser = () => {
    return (
        <Box>
            <Box row justifySpaceBetween={true}>
                <Txt
                    fontType={'bold'}
                    marginVertical={10}>Điểm</Txt>
                <TouchableOpacity onPress={() => navigate(routes.teacher.EDIT_MARK)}>
                    <Txt
                        bold
                        marginVertical={10}>Sửa điểm</Txt>
                </TouchableOpacity>
            </Box>

            <Box row>
                <Txt style={styles.textName}>Họ và tên</Txt>
                <Txt style={styles.textScore}>Điểm</Txt>
            </Box>
            <ScrollView style={{ marginBottom: 200 }}>
                {pointStudents().map((item, index) => {
                    return <ItemPointUser key={item._id} item={item} index={index} />
                })}
            </ScrollView>
        </Box>
    )
}

export default ListPointUser

const styles = StyleSheet.create({
    textName: {
        width: '70%',
        borderWidth: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#40BFFF',
        color: 'white',
        borderColor: '#E7E7E7',
        padding: 5,
    },
    textScore: {
        width: '30%',
        borderWidth: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#40BFFF',
        color: 'white',
        borderColor: '#E7E7E7',
        padding: 5,
    },
})