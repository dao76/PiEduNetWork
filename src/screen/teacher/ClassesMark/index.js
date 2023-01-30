import { Platform, StyleSheet, StatusBar, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { userInfoSelector } from '@selector/userSelector'
import { getMajorPointByIdTeacher } from '@service/majorService'
import Search from '@reuse/Search'
import loading2 from '@lotties/loading2.json'
import Box from '@commom/Box'
import LottieView from 'lottie-react-native';
import ListClass from './ListClass'
import Safe from '@reuse/Safe'

const ClassesMark = () => {
    const userInfo = useSelector(userInfoSelector)

    const [loading, setLoading] = useState(false)

    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        getAPI()
    }, [])

    const getAPI = async () => {
        setLoading(true)
        const res = await getMajorPointByIdTeacher({ id_teacher: userInfo._id })
        setData(res.data)
        setLoading(false)
    }

    return (
        <Safe>
            <Search
                search={search}
                setSearch={setSearch}
            />
            {!loading ?
                <ListClass
                    data={data}
                    setData={setData}
                    search={search}
                /> :
                <Box justifyCenter={true} alignCenter={true} height={'70%'}>
                    <LottieView
                        style={styles.lottieView}
                        resizeMode="contain"
                        autoSize
                        source={loading2}
                        autoPlay
                        loop
                    />
                </Box>
            }
        </Safe>
    )
}

export default ClassesMark

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    lottieView: {
        width: 100,
    },
})