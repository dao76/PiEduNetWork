import React from 'react'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import { loadingUser } from '@hooks/loading'
import LottieAnimation from './LottieAnimation'

const ButtonUser = ({ onPress, text, marginTop = 20 }) => {
    return (
        <Btn
            onPress={onPress}
            backgroundColor={theme.colors.btnUser}
            height={50}
            width={'100%'}
            radius={10}
            marginTop={marginTop}
        >
            {loadingUser() ?
                <LottieAnimation source={require('@lotties/loading.json')} /> :
                <Txt color={'white'} size={18} bold>{text}</Txt>
            }
        </Btn>
    )
}

export default ButtonUser