import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Safe from '@reuse/Safe'
import { getPointByIdColumnPoint } from '@service/pointService'
import { useDispatch, useSelector } from 'react-redux'
import { columnPointChooseSelector } from '@selector/pointSelector'
import Txt from '@commom/Txt'
import Box from '@commom/Box'
import Scroll from '@commom/Scroll'
import ItemPoint from './ItemPoint'
import { alerCannotConnect, alertConfirm } from '@method/alert'
import Btn from '@commom/Btn'
import { unwrapResult } from '@reduxjs/toolkit'
import { updateManyPointStudentThunk } from '@asyncThunk/pointAsyncThunk'

const EditMark = () => {
    const [data, setData] = useState([])

    const inputRef = React.createRef()

    const columnPointChoose = useSelector(columnPointChooseSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        getAPI()
    }, [])

    const getAPI = async () => {
        const res = await getPointByIdColumnPoint(columnPointChoose)
        if (!res.error) {
            setData(res.data.map((item, index) => {
                if (item.point !== null) {
                    return {
                        _id: item._id,
                        name: item.student.name,
                        point: String(item.point),
                        position: index
                    }
                }
                return {
                    _id: item._id,
                    name: item.student.name,
                    point: '',
                    position: index
                }
            }))
        }
    }

    const handleEditPoint = (point, item) => {
        data[item.position].point = point
    }

    const handleShowAlertEditPoint = () => {
        inputRef.current.blur();
        alertConfirm('Sửa điểm', 'Xác nhận sửa điểm', 'Edit', editPoint)
    }

    const editPoint = async () => {
        const payload = unwrapResult(await dispatch(updateManyPointStudentThunk({ arrPointsStudent: data })))
        if (payload.error) alerCannotConnect()
        if (payload.status) alert('Cập nhật thành công')
    }

    return (
        <Safe paddingHorizontal={10} marginTop={20}>
            {data.length > 0 &&
                <Scroll paddingBottom={200}>
                    <Box row>
                        <Txt style={styles.textName}>Họ và tên</Txt>
                        <Txt style={styles.textScore}>Điểm</Txt>
                    </Box>
                    {data.map(item =>
                        <ItemPoint
                            ref={inputRef}
                            key={item._id}
                            item={item}
                            onEditPoint={handleEditPoint}
                        />
                    )}
                </Scroll>
            }
            <Box
                absolute
                bottom={100}
                width={'100%'}
                alignCenter
            >
                <Btn
                    onPress={handleShowAlertEditPoint}
                    backgroundColor={'#40BFFF'}
                    height={50}
                    width={'90%'}
                    radius={10}
                >
                    <Txt bold color={'white'} size={16}>Cập nhật</Txt>
                </Btn>
            </Box>
        </Safe>
    )
}

export default EditMark

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