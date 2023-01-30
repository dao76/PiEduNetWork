import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@commom/Box'

const Safe = ({
    children,
    paddingHorizontal,
    paddingVertical,
    marginTop,
    backgroundColor = 'white'
}) => {
    return (
        <Box
            flex={1}
            isPaddingAdnroid
            paddingHorizontal={paddingHorizontal}
            backgroundColor={backgroundColor}
            marginTop={marginTop}
        >
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: backgroundColor,
                    paddingVertical: paddingVertical
                }}
            >
                {children}
            </SafeAreaView>
        </Box>
    )
}

export default Safe

const styles = StyleSheet.create({})