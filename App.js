import { StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Container from '@navigation/Container'
import store from './src/redux/store'
import { Provider } from 'react-redux'
import ForgotPassword from '@screen/public/ForgotPassword'
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Container />
      </SafeAreaProvider>
    </Provider>


  )
}

export default App

const styles = StyleSheet.create({})