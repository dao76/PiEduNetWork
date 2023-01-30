import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import Img from '@commom/Img'

const Header = ({ avatar }) => {
    return (
        <Box>
            <ImageBackground
                style={styles.imgBackGround}
                resizeMode={'cover'}
                source={require('@images/educationbook.png')}
            >
                <Box
                    backgroundColor={'white'}
                    width={100}
                    height={100}
                    radius={60}
                    alignCenter
                    justifyCenter
                >
                    {avatar ?
                        <Img
                            width={80}
                            height={80}
                            radius={50}
                            source={{ uri: 'https://viblo.asia/logo_full.svg' }}
                            resizeMode='contain'
                        /> :
                        <Img
                            width={80}
                            height={80}
                            radius={50}
                            source={require('@images/account.png')}
                            resizeMode='contain'
                        />
                    }
                </Box>
            </ImageBackground>
        </Box>
    )
}

export default Header

const styles = StyleSheet.create({
    imgBackGround: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    }
})