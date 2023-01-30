import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getColumnPointByIdMajor, getPointByIdColumnPoint } from '@service/pointService'
import Safe from '@reuse/Safe'
import ListColumnPoint from './ListColumnPoint'
import ListPointUser from './ListPointUser'
import { alerCannotConnect } from '@method/alert'
import { useDispatch, useSelector } from 'react-redux'
import { getColumnPointByIdMajorThunk, getPointByIdColumnPointThunk } from '@asyncThunk/pointAsyncThunk'
import { unwrapResult } from '@reduxjs/toolkit'
import { columnPointChoose } from '@hooks/point'
import ModalAddColumn from './ModalAddColumn'
import { majorSelector } from '@selector/pointSelector'

const MarkTeacher = () => {
    const [showModalAddColumn, setShowModalAddColumn] = useState([])

    const dispatch = useDispatch()
    const major = useSelector(majorSelector)

    useEffect(() => {
        getAPI()
    }, [])

    const getAPI = async () => {
        const payload = unwrapResult(await dispatch(getColumnPointByIdMajorThunk(major._id)))
        if (payload.error) {
            alerCannotConnect()
        }
    }

    return (
        <Safe paddingHorizontal={10} backgroundColor={'white'}>
            <ListColumnPoint setShowModalAddColumn={setShowModalAddColumn} />
            {columnPointChoose() && <ListPointUser />}

            <ModalAddColumn
                show={showModalAddColumn}
                setShow={setShowModalAddColumn}
            />
        </Safe>
    )
}

export default MarkTeacher

const styles = StyleSheet.create({})