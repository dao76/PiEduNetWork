import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '@commom/Input'
import { theme } from '@theme/index'
import Box from '@commom/Box'
import Txt from '@commom/Txt'

const InputUser = ({
    value,
    onChangText,
    hint,
    security = false,
    hintColor = '#666666',
    text,
    marginTop = 20,
    iconTwo
}) => {
    return (
        <Box marginTop={marginTop}>
            <Txt
                color={theme.colors.blackBlue}
                size={18}
                bold
            >
                {text}
            </Txt>

            <Input
                value={value}
                onChangeText={onChangText}
                hint={hint}
                hintColor={hintColor}
                security={security}
                borderBottomWidth={1}
                height={50}
                borderColor={theme.colors.grayBorderInput}
            />
        </Box>
    )
}

export default InputUser

const styles = StyleSheet.create({})