import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Safe from '@reuse/Safe'
import Txt from '@commom/Txt'
import { getCurrentDate, getDay } from '@method/date'
import Box from '@commom/Box'
import ItemDay from './ItemDay'
import Scroll from '@commom/Scroll'
import Btn from '@commom/Btn'
import { alerCannotConnect, alertConfirm } from '@method/alert'
import { useSelector } from 'react-redux'
import { userInfoSelector } from '@selector/userSelector'
import { updateClass } from '@service/classService'

const CalendarUpdate = ({ route }) => {
    const { data } = route.params

    const userInfo = useSelector(userInfoSelector)

    const inputRef = React.createRef()

    const handleEditPoint = (text, day, index) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i]._id === day._id) {
                data[i].data[index] = text
            }
        }
    }

    const handleShowAlertUpdateCalendar = () => {
        inputRef.current.blur()
        alertConfirm('Sửa thời khóa biểu', 'Bạn có chắc muốn sửa thời khóa biểu', 'Edit', handleUpdateCalendar)
    }

    const handleUpdateCalendar = async () => {
        const classed = {
            _id: userInfo.id_class._id,
            t2: data[0].data,
            t3: data[1].data,
            t4: data[2].data,
            t5: data[3].data,
            t6: data[4].data,
            t7: data[5].data
        }

        const res = await updateClass(classed)
        if (res.error) return alerCannotConnect()
        alert('Sửa thành công')
    }

    return (
        <Safe paddingHorizontal={10} marginTop={10}>
            <Txt bold size={16}>{getCurrentDate()}</Txt>
            <Scroll paddingBottom={150}>
                {data.map(item =>
                    <ItemDay
                        ref={inputRef}
                        key={item._id}
                        item={item}
                        onEditPoint={handleEditPoint}
                    />
                )}
            </Scroll>
            <Box
                width={'100%'}
                alignCenter
                bottom={100}
            >
                <Btn
                    onPress={handleShowAlertUpdateCalendar}
                    backgroundColor={'#40BFFF'}
                    height={50}
                    width={'97%'}
                    radius={10}
                >
                    <Txt bold color={'white'} size={16}>Cập nhật</Txt>
                </Btn>
            </Box>
        </Safe>
    )
}

export default CalendarUpdate

const styles = StyleSheet.create({})