import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Box from '@commom/Box';
import { theme } from '@theme/index';
import Txt from '@commom/Txt';

const UserHeaderItem = ({ name, roleName, style, marginTop, imgRole }) => {
    const imgSrc = () => {
        if (imgRole === 0) {
            return require('@images/menu/teachermini.png');
        }
        return require('@images/menu/studentModal.png');
    };

    return (
        <Box style={style} marginTop={marginTop && marginTop} alignCenter row>
            <Box alignCenter marginRight={8}>
                <Image style={styles.imageUserItem} source={imgSrc()} />
                <Txt size={15} color={theme.colors.lightBlue2} bold>
                    {roleName}
                </Txt>
            </Box>
            <Box
                minWidth={'40%'}
                maxWidth={'70%'}
                marginTop={-5}
                padding={6}
                radius={5}
                backgroundColor={theme.colors.white}>
                <Txt color={theme.colors.lightBlue2} bold size={18}>
                    {name}
                </Txt>
            </Box>
        </Box>
    );
};

const HeaderMenu = ({ style, marginTop, nameClass, mainTeacher, mainStudent }) => {
    return (
        <View
            source={require('@images/menu/rectangle.png')}
            style={[styles.container, style, marginTop && { marginTop: marginTop }]}>
            <Txt
                marginBottom={12}
                bold
                color={theme.colors.lightBlue2}
                size={24}>
                {nameClass}
            </Txt>
            <UserHeaderItem
                roleName={'Chủ nhiệm'}
                name={mainTeacher}
                imgRole={0}
            />
            <UserHeaderItem
                marginTop={14}
                roleName={'Lớp trưởng'}
                name={mainStudent}
            />
        </View>
    )
}

export default HeaderMenu

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 15,
        backgroundColor: '#EAFAFA',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    imageUserItem: {
        resizeMode: 'cover',
        backgroundColor: '#fff',
        borderRadius: 50,
    },
})