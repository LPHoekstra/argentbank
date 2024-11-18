import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import userAPI from "../../api/userAPI"
import { setUser } from "../../redux/userSlice"
import { connected, disconnect } from "../../redux/authSlice"
import { useEffect } from "react"
import { setError } from "../../redux/errorSlice"
import Loaders from "../Loaders"

function ProtectedRoute({ children }) {
    const isUserData = useSelector((state) => state.user.id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await userAPI.getProfile()

                dispatch(connected(response.body.email))
                dispatch(setUser(response.body))

                return true
            } catch (error) {
                dispatch(setError(error.message))
                return false
            }
        }

        const verifyInformation = async () => {
            const token = localStorage.getItem("token")

            if (isUserData || (token && await getProfile())) {
                return
            }

            dispatch(disconnect())
            navigate("/login", { replace: true })
        }

        verifyInformation()
    }, [dispatch, isUserData, navigate])

    // return a loading screen
    return isUserData ? children : <Loaders />
}

export default ProtectedRoute