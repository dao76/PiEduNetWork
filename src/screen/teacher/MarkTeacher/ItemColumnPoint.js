import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Txt from '@commom/Txt'
import { columnPointChoose } from '@hooks/point'
import { useDispatch, useSelector } from 'react-redux'
import { deleteColumnPonitThunk, getColumnPointByIdMajorThunk, getPointByIdColumnPointThunk } from '@asyncThunk/pointAsyncThunk'
import { majorSelector } from '@selector/pointSelector'
import { alertConfirm } from '@method/alert'

const ItemColumnPoint = ({ item }) => {
    const dispatch = useDispatch()

    const major = useSelector(majorSelector)

    const onGetpoint = async () => {
        await dispatch(getPointByIdColumnPointThunk(item._id))
    }

    const showAlertRemoveColumnPoint = async () => {
        alertConfirm('Xoá', 'Xoá cột điểm', 'delete', removeColumnPoint)
    }

    const removeColumnPoint = async () => {
        await dispatch(deleteColumnPonitThunk(item._id))
        await dispatch(getColumnPointByIdMajorThunk(major._id))
    }

    return (
        <TouchableOpacity
            onLongPress={showAlertRemoveColumnPoint}
            onPress={onGetpoint}
            style={[
                styles.button,
                { borderColor: item._id === columnPointChoose() ? '#40BFFF' : '#E7E7E7' }
            ]}
        >
            <Txt numberOfLines={1}>{item.name}</Txt>
        </TouchableOpacity>
    )
}

export default ItemColumnPoint

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        marginTop: 5,
        marginEnd: 5,
        padding: 10,
        borderColor: '#E7E7E7'
    }
})