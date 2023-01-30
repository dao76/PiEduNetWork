import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '@screen/public/Login'
import routes from '@util/routes'
import ForgotPassword from '@screen/public/ForgotPassword'

const Stack = createNativeStackNavigator()

const UserStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.public.LOGIN} component={Login} />
            <Stack.Screen name={routes.public.FORGOT_PASSWORD} component={ForgotPassword} />
        </Stack.Navigator>
    )
}

export default UserStack