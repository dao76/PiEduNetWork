import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import { formatDate } from '@method/date'
import Safe from '@reuse/Safe'

const NotificationDeltai = ({ route }) => {
    const { notification } = route.params

    return (
        <Safe>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 10,
                    paddingBottom: 300
                }}
            >
                <Box
                    row
                    alignCenter
                    marginVertical={15}
                >

                    <Box marginLeft={10}>

                        <Box row alignCenter marginTop={5}>
                            <Image
                                style={{
                                    width: 18,
                                    height: 18
                                }}
                                source={require('@images/oclock.png')}
                            />
                            <Text
                                style={{
                                    color: '#808994',
                                    fontWeight: 'bold',
                                }}
                            >
                                {formatDate(notification.createdAt)}
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Text
                    style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 10 }}
                >
                    {notification.title}
                </Text>

                <Text style={{ marginTop: 20 }}>
                    {notification.content}
                </Text>
            </ScrollView>
        </Safe>
    )
}

export default NotificationDeltai

const styles = StyleSheet.create({})