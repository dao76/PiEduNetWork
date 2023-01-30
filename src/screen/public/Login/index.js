import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Safe from '@reuse/Safe'
import getToken from '@method/getToken'
import Banner from '@reuse/Banner'
import Form from './Form'
import Footer from './Footer'
import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { loginThunk } from '@asyncThunk/userAsyncThunk'
import { alertEmptyForm, alerCannotConnect } from '@method/alert'
import userSlice from '@slice/userSlice'

const Login = () => {
  const [email, setEmail] = useState('phanthanh783@gmail.com');
  const [password, setPassword] = useState('123456')
  const [token, setToken] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    getToken().then(token => setToken(token))
  }, [])

  const handleLogin = async () => {
    if (email.trim().length === 0 || password.trim().length === 0) return alertEmptyForm()
    const payload = unwrapResult(
      await dispatch(loginThunk({
        email,
        password,
        token_notification: token
      }))
    )

    if (payload.error) {
      dispatch(userSlice.actions.changeLoading())
      return alerCannotConnect()
    }
    payload.result_code !== 1 && alert('Email hoặc mật khẩu không chính xác')
  }

  return (
    <Safe>
      <Banner text={'Log-in'} />
      <Form
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <Footer onLogin={handleLogin} />
    </Safe>
  )
}

export default Login

const styles = StyleSheet.create({})