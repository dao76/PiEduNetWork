import routes from '@util/routes';

const dataMenu =
    [
        {
            _id: 0,
            name: 'Điểm danh',
            icon: require('@images/menu/attendance.png'),
            screen: null,
        },
        {
            _id: 1,
            name: 'Điểm số',
            icon: require('@images/menu/score.png'),
            screen: routes.teacher.CLASS_ATTENDANCE_TEACHER
        },
        {
            _id: 2,
            name: 'Phụ huynh',
            icon: require('@images/menu/family.png'),
            screen: null
        },
        {
            _id: 3,
            name: 'Lớp học',
            icon: require('@images/menu/blackboard.png'),
            screen: null
        },
        {
            _id: 4,
            name: 'Giáo viên',
            icon: require('@images/menu/teacher.png'),
            screen: null
        },
    ]

export default dataMenu