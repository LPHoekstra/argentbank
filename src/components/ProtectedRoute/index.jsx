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
                id: response.body.id,
                user: response.body.email
            }
            dispatch(setUser(payload))
            dispatch(connected(response.body.email))

            return true
        } catch (error) {
            dispatch(setError(error.message))

            return false
        }
    }

    useEffect(() => {
        const verifyTokenAndState = async () => {
            const token = localStorage.getItem("token")

            if (!isConnected && token) {
                const isValidToken = await tokenVerification()

                if (!isValidToken) {
                    navigate("/signin", { replace: true })
                }
            } else if (!token) {
                navigate("/signin", { replace: true })
            }
        }

        verifyTokenAndState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isConnected, navigate])

    // return a loading screen
    return isConnected ? children : <Loaders />
}

export default ProtectedRoute