import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Safe from '@reuse/Safe'
import Txt from '@commom/Txt'
import { getCurrentDate, getDay } from '@method/date'
import Box from '@commom/Box'
import { getCalendar } from '@service/classService'
import { useSelector } from 'react-redux'
import { userInfoSelector } from '@selector/userSelector'
import ItemDay from './ItemDay'
import { alerCannotConnect } from '@method/alert'
import Btn from '@commom/Btn'
import contants from '@util/contants'
import { navigate } from '@navigation/navigationRef'
import routes from '@util/routes'

const Calendar = ({ navigation }) => {
    const userInfo = useSelector(userInfoSelector)
    const [data, setData] = useState([])
    const [dayChoose, setDayChoose] = useState()

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getAPI()
        })

        return () => unsubscribe
    }, [])

    const getAPI = async () => {
        const res = await getCalendar(userInfo.id_class._id)
        if (res.error) return alerCannotConnect()
        setData(res.data)
        setDayChoose(getDay())
    }

    return (
        <Safe paddingHorizontal={10} marginTop={10}>
            <Box row justifySpaceBetween>
                <Txt bold size={16}>{getCurrentDate()}</Txt>
                {(userInfo.role === contants.role.mainTeacher || userInfo.role === contants.role.classMonitor) &&
                    <Btn onPress={() => navigate(routes.public.CALENDAR_UPDATE, { data })}>
                        <Txt bold size={15}>Sửa đổi</Txt>
                    </Btn>
                }
            </Box>
            <Box>
                {data.map(item =>
                    <ItemDay
                        key={item._id}
                        item={item}
                        dayChoose={dayChoose}
                        setDayChoose={setDayChoose}
                    />
                )}
            </Box>
        </Safe>
    )
}

export default Calendar

const styles = StyleSheet.create({})