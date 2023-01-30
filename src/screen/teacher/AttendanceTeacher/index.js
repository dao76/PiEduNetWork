import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useRef } from 'react'
import { useEffect } from 'react'
import { Alert } from 'react-native'
import { useState } from 'react'
import Search from './Search'
import Box from '@commom/Box'
import { ScrollView } from 'react-native'
import LottieAnimation from '@reuse/LottieAnimation'
import { goBack } from '@navigation/navigationRef'
import * as Notifications from 'expo-notifications'
import Safe from '@reuse/Safe'
import Item from './Item'
import { attendaces, createNotfication, updateAttendances } from '@service/attendanceService'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const AttendanceTeacher = ({ route }) => {
  const { classed } = route.params
  const [data, setData] = useState()
  const [absents, setAbsents] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState(false)
  const notificationListener = useRef()
  const responseListener = useRef()

  useEffect(() => {
    getAPI()

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };

  }, [])

  const getAPI = async () => {
    const res = await attendaces(classed._id)
    if (!res.error) {
      setData(res.data)
    } else {
      Alert('Có lỗi vui lòng thử lại')
    }
  }

  const handleAddAbsent = (value, itemChange) => {
    if (value) {
      setAbsents(absents.filter(item => item._id !== itemChange._id))
    } else {
      setAbsents([...absents, itemChange])
    }
  }

  const handleChangeAttendaces = (value, itemChange) => {
    handleAddAbsent(value, itemChange)
    const students = data.studentMap.map(item => {
      if (item._id === itemChange._id) {
        return { ...item, present: value }
      }
      return item
    })
    setData({ ...data, studentMap: students })
  }

  const handleUpdateAttendaces = async () => {
    setLoading(true)
    const res = await updateAttendances({ _id: data.attendaces._id, absent: absents.map(item => item._id) })
    if (absents.length > 0) {
      let notifications = []
      for (let i = 0; i < absents.length; i++) {
        notifications.push(objectNotification(absents[i]._id, 'Thống báo đánh vắng buổi học', 'Hệ thống thông báo bạn vừa nghỉ họ'))
        notifications.push(objectNotification(absents[i].id_parent._id, 'Thống báo đánh vắng buổi học', 'Hệ thống thông báo con bạn vừa nghỉ học'))
      }
      await createNotfication(notifications)

      const notificationStudents = absents.map(item => item.token_notification)
      const studentNotification = notificationStudents.filter(item => item !== null)
      if (studentNotification.length > 0) {
        await sendPushNotification(studentNotification, 'Pi Edu NetWork', 'Hệ thống thông báo bạn vừa nghỉ học')
      }

      const notificationParents = absents.map(item => item.id_parent.token_notification)
      const parentNotification = notificationParents.filter(item => item !== null)
      if (parentNotification.length > 0) {
        await sendPushNotification(parentNotification, 'Pi Edu NetWork', 'Hệ thống thông báo con bạn vừa nghỉ học')
      }
    }

    if (!res.error) {
      setLoading(false)
      goBack()
    } else {
      Alert('Có lỗi vui lòng thử lại')
      setLoading(false)
    }
  }

  const objectNotification = (_id, title, content) => {
    return {
      recevider: _id,
      title,
      content
    }
  }

  async function sendPushNotification(array, title, content) {
    const message = {
      to: array,
      sound: 'default',
      title: title,
      body: content,
      data: { someData: 'goes here' },
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }

  let students = data?.studentMap.filter(item => item.name.toLowerCase().includes(search.toLowerCase())) || []

  return (
    <Safe>
      <Search
        search={search}
        setSearch={setSearch}
        data={data}
      />
      <Box
        flex={1}
        backgroundColor={'#F5F6FC'}
        paddingHorizontal={20}
      >
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 200,
            paddingTop: 16
          }}>
          {students.map(item =>
            <Item
              key={item._id}
              item={item}
              onChangeAttendaces={handleChangeAttendaces}
            />
          )}
        </ScrollView>
        <TouchableOpacity
          onPress={handleUpdateAttendaces}
          style={styles.btnUpdate}
        >
          {loading ?
            <LottieAnimation source={require('@lotties/load.json')} /> :
            <Text style={styles.textBtn}>Cập nhật</Text>
          }
        </TouchableOpacity>
      </Box>
    </Safe>
  )
}

export default AttendanceTeacher

const styles = StyleSheet.create({
  textBtn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  btnUpdate: {
    backgroundColor: '#223843',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 25,
    marginVertical: 40,
    marginBottom: 80
  }
})