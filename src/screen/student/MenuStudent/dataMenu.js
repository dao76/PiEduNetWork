import routes from '@util/routes';

const dataMenu = [
    {
        id: 1,
        name: 'Học sinh',
        icon: require('@images/menu/user.png'),
        screen: null,
    },
    {
        id: 2,
        name: 'Điểm danh',
        icon: require('@images/menu/attendance.png'),
        screen: routes.student.ATTENDANCE_STUDENT,
    },
    {
        id: 3,
        name: 'Thời khoá biểu',
        icon: require('@images/menu/timetable.png'),
        screen: routes.public.CALENDAR,
    },
    {
        id: 5,
        name: 'Điểm số',
        icon: require('@images/menu/score.png'),
        screen: null
    },
    {
        id: 6,
        name: 'Giáo viên',
        icon: require('@images/menu/teacher.png'),
        screen: null,
    },
    {
        id: 7,
        name: 'Lớp học',
        icon: require('@images/menu/blackboard.png'),
        screen: null,
    },
    {
        id: 8,
        name: 'Ghi chú',
        icon: require('@images/menu/post-it.png'),
        screen: routes.student.NOTECLASS,
    },
    // {
    //     id: 9,
    //     name: 'Sơ đồ lớp',
    //     icon: require('@images/menu/diagram.png'),
    //     screen: null,
    // },
];

export default dataMenu