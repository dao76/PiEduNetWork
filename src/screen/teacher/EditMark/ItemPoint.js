import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'

const ItemPoint = React.forwardRef((props, ref) => {
    const { item, onEditPoint } = props

    return (
        <Box row>
            <Txt
                style={[
                    styles.textName,
                    { backgroundColor: item.position % 2 ? '#F1F1F1' : 'white' }
                ]}
            >
                {item.name}
            </Txt>

            <TextInput
                style={[
                    styles.input,
                    { backgroundColor: item.position % 2 ? '#F1F1F1' : 'white' }
                ]}
                ref={ref}
                defaultValue={item.point}
                keyboardType={'decimal-pad'}
                onEndEditing={(e) => onEditPoint(e.nativeEvent.text, item)}
            />
        </Box>
    )
})

export default ItemPoint

const styles = StyleSheet.create({
    textName: {
        width: '70%',
        borderWidth: 1,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: '#40BFFF',
        borderColor: '#E7E7E7',
        padding: 5,
    },
    input: {
        width: '30%',
        borderWidth: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#40BFFF',
        color: 'black',
        borderColor: '#E7E7E7',
        padding: 5,
    },
})