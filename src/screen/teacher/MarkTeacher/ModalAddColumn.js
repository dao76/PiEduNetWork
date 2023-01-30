import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modality from '@reuse/Modality'
import Txt from '@commom/Txt'
import Box from '@commom/Box'
import { insertColumnPoint } from '@service/pointService'
import { useDispatch, useSelector } from 'react-redux'
import { getColumnPointByIdMajorThunk } from '@asyncThunk/pointAsyncThunk'
import { majorSelector } from '@selector/pointSelector'

const ModalAddColumn = ({ show, setShow }) => {
    const [text, setText] = useState('')

    const dispatch = useDispatch()
    const major = useSelector(majorSelector)

    const addColumnPoint = async () => {
        const res = await insertColumnPoint({
            id_majorpoint: major._id,
            id_class: major.id_class._id,
            name: text
        })

        if (!res.error) {
            await dispatch(getColumnPointByIdMajorThunk(major._id))
        }
        setShow(false)
    }

    return (
        <Modality
            show={show}
            setShow={setShow}
        >
            <Box backgroundColor={'white'} width={'80%'} padding={20}>
                <Txt>Tên cột điểm</Txt>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button} onPress={addColumnPoint}>
                    <Txt style={styles.text}>Tạo</Txt>
                </TouchableOpacity>
            </Box>
        </Modality>
    )
}

export default ModalAddColumn

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#40BFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        height: 40
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 5
    }
})