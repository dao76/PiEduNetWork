import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from '@util/routes'
import Profile from '@screen/public/Profile'
import ChangePassword from '@screen/public/ChangePassword/index'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.public.PROFILE} component={Profile} />
      <Stack.Screen name={routes.public.CHANGE_PASSWORD} component={ChangePassword} />
    </Stack.Navigator>
  )
}

export default ProfileStack
