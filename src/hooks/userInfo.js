import { isLoginUserSelector, userInfoSelector } from "@selector/userSelector";
import { useSelector } from "react-redux";

export const userInfo = () => useSelector(userInfoSelector)

export const login = () => useSelector(isLoginUserSelector)