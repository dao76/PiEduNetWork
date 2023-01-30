
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Safe from '@reuse/Safe'
import getToken from '@method/getToken'
import Banner from '@reuse/Banner'
import Form from './Form'
import Footer from './Footer'
import { sendmail, very } from '@service/userSerivce'
import { alertEmptyForm, alernoemail, alerloadmail, alerchangepaass } from '@method/alert'


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('')
  const [codeOtp, setCodeOtp] = useState('')
  const handleforgot = async () => {

    await sendmail({ email })
    if (email.trim().length === 0) {
      alernoemail()
    } else {
      alerloadmail()
      await sendmail({ email })
    }
  }

  const handleveri = async () => {
    if (email.trim().length === 0 || newPassword.trim().length === 0 || codeOtp.trim().length === 0) {
      alertEmptyForm()
    } else {
      alerchangepaass()
      await very({ email, codeOtp, newPassword })

    }

  }
  return (
    <Safe>
      <Banner text={'Forgot password'} />
      <Form
        email={email}
        setEmail={setEmail}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        codeOtp={codeOtp}
        setCodeOtp={setCodeOtp}
      />
      <Footer onforgot={handleforgot} onVery={handleveri} />
    </Safe>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  com: {
    backgroundColor: 'red'
  }
})