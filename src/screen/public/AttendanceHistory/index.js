import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { alerCannotConnect } from '@method/alert'
import Safe from '@reuse/Safe'
import Box from '@commom/Box'
import { historyAttendances } from '@service/attendanceService'
import Item from './Item'

const AttendanceHistory = ({ route }) => {
    const { id_class } = route.params
    const [data, setData] = useState(null)

    useEffect(() => {
        getAPI()
    }, [])

    const getAPI = async () => {
        const res = await historyAttendances(id_class)
        if (!res.error) {
            setData(res.data)
        } else {
            alerCannotConnect()
        }
    }

    return (
        <Safe>
            <Box
                paddingHorizontal={20}
                backgroundColor={'#F5F6FC'}
                flex={1}
            >
                <Text style={styles.text}>Điểm danh</Text>
                <Box row wrap width={'100%'} justifySpaceBetween>
                    {data?.attendaces.map(item =>
                        <Item
                            key={item._id}
                            item={item}
                            total={data.total.length}
                        />
                    )}
                </Box>
            </Box>
        </Safe>
    )
}

export default AttendanceHistory

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 19,
        marginTop: 15,
        marginBottom: 25
    }
})