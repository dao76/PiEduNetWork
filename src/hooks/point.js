import { columnPointChooseSelector, columnPointSelector, majorSelector, pointStudentSelector } from "@selector/pointSelector";
import { useSelector } from "react-redux";

export const major = () => useSelector(majorSelector)

export const columnPoints = () => useSelector(columnPointSelector)

export const pointStudents = () => useSelector(pointStudentSelector)

export const columnPointChoose = () => useSelector(columnPointChooseSelector)