import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import userAPI from "../../api/userAPI"
import { setUser } from "../../redux/userSlice"
import { connected } from "../../redux/authSlice"
import { useEffect } from "react"
import { setError } from "../../redux/errorSlice"
import Loaders from "../Loaders"

function ProtectedRoute({ children }) {
    const isConnected = useSelector((state) => state.auth.isConnected)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const tokenVerification = async () => {
        try {
            const response = await userAPI.getProfile()

            const payload = {
                email: response.body.email,
                firstName: response.body.firstName,
                lastName: response.body.lastName,
                userName: response.body.userName,
                id: response.body.id,
            }
            dispatch(connected(response.body.email))
            dispatch(setUser(payload))

            return true
        } catch (error) {
            dispatch(setError(error.message))

            return false
        }
    }

    useEffect(() => {
        const verifyTokenAndState = async () => {
            const token = localStorage.getItem("token")

            if (token) {
                const isValidToken = await tokenVerification()

                if (!isValidToken) {
                    navigate("/login", { replace: true })
                }
            } else if (!token) {
                navigate("/login", { replace: true })
            }
        }

        verifyTokenAndState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate])

    // return a loading screen
    return isConnected ? children : <Loaders />
}

export default ProtectedRoute