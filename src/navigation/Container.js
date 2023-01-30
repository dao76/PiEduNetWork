import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './navigationRef'
import routes from '@util/routes'
import Hello from '@screen/public/Hello'
import MainNavigation from './MainNavigation'
import ForgotPassword from '@screen/public/ForgotPassword'
const Stack = createNativeStackNavigator()

const Container = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name={routes.public.HELLO} component={Hello} />
        <Stack.Screen name={routes.public.MAIN_NAVIGATION} component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Container