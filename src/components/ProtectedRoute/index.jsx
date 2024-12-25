import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import userAPI from "../../api/userAPI"
import { setUser } from "../../redux/userSlice"
import { useEffect, useState } from "react"
import { setError } from "../../redux/errorSlice"
import { loading, notLoading } from "../../redux/loadersSlice"
import Logout from "../../pages/Logout"

function ProtectedRoute({ children }) {
    const isUserData = useSelector((state) => state.user.id)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [logout, setLogout] = useState(false)

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await userAPI.getProfile()

                dispatch(setUser(response.body))
                localStorage.setItem("userName", response.body.userName)

                return true
            } catch (error) {
                dispatch(setError(error.message))
                return false
            }
        }

        // verify if a token is in local storage and get profile data
        // otherwise navigate the user to login page
        const verifyInformation = async () => {
            const token = localStorage.getItem("token")

            if (token) {
                const isProfileLoaded = await getProfile()
                if (isProfileLoaded) {
                    dispatch(notLoading())
                    return
                }
            }

            dispatch(notLoading())
            setLogout(true)
        }

        // if there is no information in the user state
        if (!isUserData) {
            dispatch(loading())
            verifyInformation()
        }
    }, [dispatch, isUserData, navigate])

    if (logout) {
        return <Logout redirection="/login" />
    }
    
    return isUserData && children
}

export default ProtectedRoute