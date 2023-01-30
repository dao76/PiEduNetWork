export const formatDate = (dateServer) => {
    const created_date = new Date(dateServer)
    const year = created_date.getFullYear()
    const month = created_date.getMonth() + 1
    const date = created_date.getDate()
    return date + '/' + month + '/' + year
}

export const formatDay = (dateServer) => {
    const days = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thư 5', 'Thứ 6', 'Thứ 7']

    const created_date = new Date(dateServer)
    const year = created_date.getFullYear()
    const month = created_date.getMonth() + 1
    const date = created_date.getDate()
    const day = days[created_date.getDay()]

    return `${day} ${date}/${month}/${year}`
}

export const getCurrentDate = () => {
    const today = new Date()
    const days = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']
    const day = days[today.getDay()]
    const dd = today.getDate()
    const mm = today.getMonth() + 1
    const yyyy = today.getFullYear();

    return day + ' ' + dd + '/' + mm + '/' + yyyy;
}

export const getDay = () => {
    const today = new Date()
    return today.getDay()
}
