import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from '@util/routes'
import MenuMainTeacher from '@screen/teacher/MenuMainTeacher'
import MenuSubjectTeacher from '@screen/teacher/MenuSubjectTeacher'
import MenuStudent from '@screen/student/MenuStudent'
import MenuParent from '@screen/parent/MenuParent'
import { userInfo } from '@hooks/userInfo'
import contants from '@util/contants'
import ClassesMark from '@screen/teacher/ClassesMark'
import MarkTeacher from '@screen/teacher/MarkTeacher'
import EditMark from '@screen/teacher/EditMark'
import ClassAttendaceTeacher from '@screen/teacher/ClassAttendaceTeacher'
import AttendanceTeacher from '@screen/teacher/AttendanceTeacher'
import AttendanceHistory from '@screen/public/AttendanceHistory'
import AttendanceHistoryDetail from '@screen/public/AttendanceHistoryDetail'
import AttendanceStudent from '@screen/student/AttendanceStudent'
import Calendar from '@screen/public/Calendar'
import UpdateCalendar from '@screen/public/CalendarUpdate'
import CalendarUpdate from '@screen/public/CalendarUpdate'
import NoteClass from '@screen/student/NoteClass/Index'
const Stack = createNativeStackNavigator()

const MenuStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {userInfo().role === contants.role.mainTeacher &&
                <Stack.Screen name={routes.teacher.MENU_MAIN_TEACHER} component={MenuMainTeacher} />}

            {userInfo().role === contants.role.subjectTeacher &&
                <Stack.Screen name={routes.teacher.MENU_SUBJECT_TEACHER} component={MenuSubjectTeacher} />}

            {(userInfo().role === contants.role.student || userInfo().role === contants.role.classMonitor) &&
                <Stack.Screen name={routes.student.MENU_STUDENT} component={MenuStudent} />}

            <Stack.Screen name={routes.parent.MENU_PARENT} component={MenuParent} />

            <Stack.Screen name={routes.teacher.CLASSES_MARK} component={ClassesMark} />
            <Stack.Screen name={routes.teacher.MARK_TEACHER} component={MarkTeacher} />
            <Stack.Screen name={routes.teacher.EDIT_MARK} component={EditMark} />
            <Stack.Screen name={routes.teacher.CLASS_ATTENDANCE_TEACHER} component={ClassAttendaceTeacher} />
            <Stack.Screen name={routes.teacher.ATTENDANCE_TEACHER} component={AttendanceTeacher} />
            <Stack.Screen name={routes.student.ATTENDANCE_STUDENT} component={AttendanceStudent} />
            <Stack.Screen name={routes.public.ATTENDANCE_HISTORY} component={AttendanceHistory} />
            <Stack.Screen name={routes.public.ATTENDANCE_HISTORY_DETAIL} component={AttendanceHistoryDetail} />
            <Stack.Screen name={routes.public.CALENDAR} component={Calendar} />
            <Stack.Screen name={routes.public.CALENDAR_UPDATE} component={CalendarUpdate} />
            <Stack.Screen name={routes.student.NOTECLASS} component={NoteClass} />

        </Stack.Navigator>
    )
}

export default MenuStack