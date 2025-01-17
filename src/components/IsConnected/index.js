import { useDispatch } from "react-redux"
import { connect } from "../../redux/authSlice"

// if a token is in localStorage set the connected state
function IsConnected() {
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")

    if (token) {
        dispatch(connect())
    }
}

export default IsConnected