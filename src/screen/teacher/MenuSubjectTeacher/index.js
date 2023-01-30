import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import HelloUser from '@reuse/HelloUser'
import Box from '@commom/Box'
import ItemFeature from '@reuse/ItemFeature'
import dataMenu from './dataMenu'
import Safe from '@reuse/Safe'
import Scroll from '@commom/Scroll'
import { useSelector } from 'react-redux'
import { userInfoSelector } from '@selector/userSelector'

const MenuSubjectTeacher = () => {
  const userInfo = useSelector(userInfoSelector)
  const [classInfo, setClassInfo] = useState(userInfo.id_class)

  return (
    <Safe>
      <Scroll paddingBottom={150} paddingHorizontal={16}>
        <HelloUser name={`Hi! ${userInfo.name}`} />
        <Box wrap row paddingBottom={50}>
          {dataMenu.map(item =>
            <ItemFeature
              key={item._id}
              item={item}
              width={'30%'}
              classInfo={classInfo}
            />)}
        </Box>
      </Scroll>
    </Safe>
  )
}

export default MenuSubjectTeacher

const styles = StyleSheet.create({})