import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Search from '@reuse/Search'
import { navigate } from '@navigation/navigationRef'
import routes from '@util/routes'
import Safe from '@reuse/Safe'
import Box from '@commom/Box'
import { getAllClass } from '@service/classService'
import ItemClass from './ItemClass'
import Scroll from '@commom/Scroll'

const ClassAttendaceTeacher = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getALLClassAPI()
    }, [])

    const getALLClassAPI = async () => {
        const res = await getAllClass()
        if (res.status) setData(res.data)
    }

    const handleAttendance = async (item) => {
        navigate(routes.teacher.ATTENDANCE_TEACHER, { classed: item })
    }

    let filterData = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())) || []

    return (
        <Safe>
            <Box flex={1} backgroundColor={'white'}>
                <Search
                    search={search}
                    setSearch={setSearch}
                />
                <Scroll paddingHorizontal={20} paddingTop={20} paddingBottom={150}>
                    {filterData.map(item =>
                        <ItemClass
                            key={item._id}
                            item={item}
                            onPress={handleAttendance}
                        />
                    )}
                </Scroll>
            </Box>
        </Safe>
    )
}

export default ClassAttendaceTeacher

const styles = StyleSheet.create({})