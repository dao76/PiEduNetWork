import { ScrollView, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { userInfoSelector } from '@selector/userSelector'
import { alerCannotConnect } from '@method/alert'
import Safe from '@reuse/Safe'
import Box from '@commom/Box'
import { attendaces } from '@service/attendanceService'
import Item from '@screen/public/AttendanceHistoryDetail/Item'
import Search from '@screen/teacher/AttendanceTeacher/Search'

const AttendanceStudent = () => {
  const [data, setData] = useState()
  const [search, setSearch] = useState('')

  const userInfo = useSelector(userInfoSelector)

  useEffect(() => {
    getAPI()
  }, [])

  const getAPI = async () => {
    const res = await attendaces(userInfo.id_class._id)
    if (!res.error) {
      setData(res.data)
    } else {
      alerCannotConnect
    }
  }

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
          {data?.studentMap.map(item =>
            <Item
              key={item._id}
              item={item}
            />
          )}
        </ScrollView>
      </Box>
    </Safe>
  )
}

export default AttendanceStudent

const styles = StyleSheet.create({})