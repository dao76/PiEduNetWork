import { Button, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import ItemColumnPoint from './ItemColumnPoint'
import { columnPoints } from '@hooks/point'
import Btn from '@commom/Btn'

const ListColumnPoint = ({ onGetPointStudent, setShowModalAddColumn }) => {
    return (
        <Box>
            <Txt
                size={15}
                bold
            >
                Cột điểm
            </Txt>
            <ScrollView horizontal>
                {columnPoints().map(item => {
                    return (
                        <ItemColumnPoint
                            key={item._id}
                            item={item}
                            onGetPointStudent={onGetPointStudent}
                        />)
                })}
                <Btn
                    onPress={() => setShowModalAddColumn(true)}
                    borderWidth={1}
                    marginTop={5}
                    marginEnd={5}
                    padding={10}
                    borderColor={'#E7E7E7'}
                >
                    <Txt>Thêm</Txt>
                </Btn>
            </ScrollView>
        </Box>
    )
}

export default ListColumnPoint

const styles = StyleSheet.create({})