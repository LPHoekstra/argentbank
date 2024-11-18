import { useDispatch } from "react-redux"
import { connected } from "../../redux/authSlice"

function IsConnected () {
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")

    if (token) {
        dispatch(connected())
    }
}

export default IsConnected