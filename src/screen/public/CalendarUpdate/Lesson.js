import { StyleSheet } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import ItemLesson from './ItemLesson'

const Lesson = React.forwardRef((props, ref) => {
    const { data, day, onEditPoint } = props

    return (
        <Box width={'100%'} row justifySpaceAround>
            <Box
                borderColor={'#40BFFF'}
                borderRightWidth={1}
                width={'45%'}
                alignCenter
            >
                <Txt>Sáng</Txt>
                <Box width={'100%'}>
                    {data.map((item, index) => {
                        if (index > 4) return
                        return (
                            <ItemLesson
                                ref={ref}
                                key={Math.random()}
                                item={item}
                                index={index}
                                day={day}
                                onEditPoint={onEditPoint}
                            />
                        )
                    })}
                </Box>
            </Box>
            <Box width={'45%'} alignCenter>
                <Txt>Chiều</Txt>
                <Box width={'100%'}>
                    {data.map((item, index) => {
                        if (index < 5) return
                        return (
                            <ItemLesson
                                ref={ref}
                                key={Math.random()}
                                item={item}
                                index={index}
                                day={day}
                                onEditPoint={onEditPoint}
                            />)
                    })}
                </Box>
            </Box>
        </Box>
    )
})

export default Lesson

const styles = StyleSheet.create({})