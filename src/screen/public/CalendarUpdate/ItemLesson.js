import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'

const ItemLesson = React.forwardRef((props, ref) => {

    const { item, index, day, onEditPoint } = props

    return (
        <Box row alignCenter>
            <Txt>{index + 1}. </Txt>
            <TextInput
                style={styles.input}
                ref={ref}
                defaultValue={item}
                onEndEditing={(e) => onEditPoint(e.nativeEvent.text, day, index)}
            />
        </Box>
    )
})

export default ItemLesson

const styles = StyleSheet.create({
    input: {

    }
})