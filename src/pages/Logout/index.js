import { useDispatch } from "react-redux"
import { removeUser } from "../../redux/userSlice"
import { disconnected } from "../../redux/authSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        dispatch(removeUser())
        dispatch(disconnected())
        localStorage.removeItem("token")
        
        navigate("/", {replace: true})
    }, [dispatch, navigate])
}

export default Logout