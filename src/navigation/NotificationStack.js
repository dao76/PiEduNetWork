import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from '@util/routes'
import Home from '@screen/public/Home'
import Notification from '@screen/public/Notification/index'
import NotiDeltai from '@screen/public/Notification/NotificationDeltai'
const Stack = createNativeStackNavigator()

const NotificationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.public.NOTIFICATION} component={Notification} />
      <Stack.Screen name={routes.public.NOTIFICATION_DETAIL} component={NotiDeltai} />

    </Stack.Navigator>
  )
}

export default NotificationStack

const styles = StyleSheet.create({})