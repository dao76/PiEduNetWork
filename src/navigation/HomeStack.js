import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from '@util/routes'
import Home from '@screen/public/Home'
import NewsDetail from '@screen/public/NewsDetail'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.public.HOME} component={Home} />
            <Stack.Screen name={routes.public.NEWS_DETAIL} component={NewsDetail} />
        </Stack.Navigator>
    )
}

export default HomeStack