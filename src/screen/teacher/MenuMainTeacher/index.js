import React, { useEffect, useState } from 'react'
import Safe from '@reuse/Safe'
import Scroll from '@commom/Scroll'
import HelloUser from '@reuse/HelloUser'
import HeaderMenu from '@reuse/HeaderMenu'
import { getClassById } from '@service/classService'
import { useSelector } from 'react-redux'
import { userInfoSelector } from '@selector/userSelector'
import ListMenu from '@reuse/ListMenu'
import dataMenu from './dataMenu'

const MenuMainTeacher = () => {
  const userInfo = useSelector(userInfoSelector)

  const [classInfo, setClassInfo] = useState(userInfo.id_class)

  useEffect(() => {
    getAPI()
  }, [])

  const getAPI = async () => {
    const res = await getClassById(userInfo.id_class._id)
    setClassInfo(res.data)
  }

  return (
    <Safe>
      <Scroll paddingBottom={150} paddingHorizontal={16}>
        <HelloUser name={`Hi ${userInfo.name}`} />
        <HeaderMenu
          marginTop={12}
          nameClass={classInfo.name}
          mainTeacher={classInfo.mainTeacher?.name}
          mainStudent={classInfo.mainStudent?.name}
        />
        <ListMenu
          dataFeature={dataMenu}
          classInfo={classInfo}
        />
      </Scroll>
    </Safe>
  )
}

export default MenuMainTeacher