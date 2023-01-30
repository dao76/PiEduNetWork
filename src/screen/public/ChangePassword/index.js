
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Safe from '@reuse/Safe'
import getToken from '@method/getToken'
import Banner from '@reuse/Banner'
import { Changepassword } from '@service/Changepass'
import Form from './Form'
import Footer from './Footer'
import { alertEmptyForm, alerConfirmPass } from '@method/alert'
import { useDispatch, useSelector } from 'react-redux'
import userSlice from '@slice/userSlice'
import { userInfoSelector } from '@selector/userSelector'

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('')
  const [confin, setConfin] = useState('')
  const userInfo = useSelector(userInfoSelector)

  const handleChange = async () => {
    if (oldPassword.trim().length === 0 || newPassword.trim().length === 0 || confin.trim().length === 0) {
      alertEmptyForm()
    } else if (newPassword !== confin) {
      alerConfirmPass()
    } else {
      console.log(userInfo._id, oldPassword, newPassword);
      await Changepassword({
        oldPassword, newPassword
      })

    }

  }
  return (
    <Safe>
      <Banner text={'Change Password'} />
      <Form
        oldPassword={oldPassword}
        setOldPassword={setOldPassword}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        confin={confin}
        setConfin={setConfin}
      />
      <Footer onforgot={handleChange} />
    </Safe>
  )
}

export default ChangePassword

const styles = StyleSheet.create({})