import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from '@util/routes';
import HomeStack from './HomeStack';
import MenuStack from './MenuStack';
import NotificationStack from './NotificationStack';
import ProfileStack from './ProfileStack';
import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const UserTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.container
            }}
        >
            <Tab.Screen
                name={routes.public.HOME_STACK}
                component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) return <Image source={require('@images/tab/home2.png')} />
                        else return <Image source={require('@images/tab/home.png')} />
                    }
                }}
            />
            <Tab.Screen
                name={routes.public.MENU_STACK}
                component={MenuStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) return <Image source={require('@images/tab/main2.png')} />
                        else return <Image source={require('@images/tab/main.png')} />
                    }
                }}
            />
            <Tab.Screen
                name={routes.public.NOTIFICATION_STACK}
                component={NotificationStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) return <Image source={require('@images/tab/bell2.png')} />
                        else return <Image source={require('@images/tab/bell.png')} />
                    }
                }}
            />
            <Tab.Screen
                name={routes.public.PROFILE_STACK}
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) return <Image source={require('@images/tab/user2.png')} />
                        else return <Image source={require('@images/tab/user.png')} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default UserTab

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 10,
        marginHorizontal: 20,
        height: 60,
        borderRadius: 10,
    }
})