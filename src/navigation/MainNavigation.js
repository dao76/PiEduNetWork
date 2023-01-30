import React from 'react'
import { login } from '@hooks/userInfo'
import UserTab from './UserTab'
import UserStack from './UserStack'

const MainNavigation = () => {
    return (
        <>
            {login() ? <UserTab /> : <UserStack />}
        </>
    )
}

export default MainNavigation