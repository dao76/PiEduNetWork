import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { alerCannotConnect } from '@method/alert'
import Search from '@reuse/Search'
import Box from '@commom/Box'
import Safe from '@reuse/Safe'
import { detailAttendaces } from '@service/attendanceService'
import Item from './Item'

const AttendanceHistoryDetail = ({ route }) => {
  const { _id } = route.params
  const [data, setData] = useState()
  const [search, setSearch] = useState('')

  useEffect(() => {
    getAPI()
  }, [])

  const getAPI = async () => {
    const res = await detailAttendaces(_id)
    if (!res.error) {
      setData(res.data)
    } else {
      alerCannotConnect()
    }
  }

  let students = data?.studentMap.filter(item => item.name.toLowerCase().includes(search.toLowerCase())) || []

  return (
    <Safe>
      <Search
        search={search}
        setSearch={setSearch}
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
            />
          )}
        </ScrollView>
      </Box>
    </Safe>
  )
}

export default AttendanceHistoryDetail
