import { Alert } from "react-native"

export const alertGoBack = (
    yesOnPress,
    title = 'Go back',
    message = 'Are you sure go back!',
    textYes = 'Yes',
    textCancel = 'Cancel',
    cancelOnPress = () => null
) => {
    Alert.alert(title, message, [
        {
            text: textCancel,
            onPress: cancelOnPress,
        },
        { text: textYes, onPress: yesOnPress }
    ])
}

export const alertConfirm = (
    title,
    message,
    textYes = 'Yes',
    yesOnPress,
    textCancel = 'Cancel',
    cancelOnPress = () => null
) => {
    Alert.alert(title, message, [
        {
            text: textCancel,
            onPress: cancelOnPress,
        },
        { text: textYes, onPress: yesOnPress }
    ])
}

export const alertEmptyForm = () => {
    alert('Vui lòng nhập đầy đủ thông tin')
}

export const alerCannotConnect = () => {
    alert('Không thể kết nối đến server! vui lòng thử lại')
}

export const alerConfirmPass = () => {
    alert('Phải Nhập mật khẩu mới và xác nhận trùng khớp !')
}
export const alerchange = () => {
    alert('Chúc Mừng Bạn Đổi Mật Khẩu Thành Công!')
}
export const alernoemail = () => {
    alert('Bạn Chưa Nhập email!')
}
export const alerloadmail = () => {
    alert('Đã gửi mã xác thực vào mail!')
}
export const alerchangepaass = () => {
    alert('Chúc mừng bạn đã đổi mật khẩu thành công!')
}
