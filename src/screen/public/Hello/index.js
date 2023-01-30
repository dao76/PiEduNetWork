import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import routes from '@util/routes'
import Box from '@commom/Box'
import Img from '@commom/Img'
import AsyncStorage from '@react-native-async-storage/async-storage'
import contants from '@util/contants'
import { useDispatch } from 'react-redux'
import { loginThunk } from '@asyncThunk/userAsyncThunk'
import { unwrapResult } from '@reduxjs/toolkit'
import getToken from '@method/getToken'

const Hello = ({ navigation }) => {
  const dispacth = useDispatch()

  useEffect(() => {
    let timer
    try {
      timer = setTimeout(async () => {
        const remember = await AsyncStorage.getItem(contants.REMEMBER)
        if (remember) {
          const token_notification = await getToken() || ''
          const user = JSON.parse(remember)
          const payload = unwrapResult(
            await dispacth(loginThunk({
              email: user.email,
              password: user.password,
              token_notification
            }))
          )
        }
        navigation.replace(routes.public.MAIN_NAVIGATION)
      }, 2000)
    } catch (error) {
      console.log('skjdh')
      navigation.replace(routes.public.MAIN_NAVIGATION)
    }

    return () => clearTimeout(timer);
  }, [])

  return (
    <Box flex={1} justifyCenter alignCenter backgroundColor={'white'}>
      <Img source={require('@images/logo.png')} />
    </Box>
  )
}

export default Hello

const styles = StyleSheet.create({})