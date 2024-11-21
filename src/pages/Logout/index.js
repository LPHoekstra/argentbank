import { useDispatch } from "react-redux"
import { removeUser } from "../../redux/userSlice"
import { disconnect } from "../../redux/authSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import PropTypes from "prop-types"

function Logout({ redirection }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        dispatch(removeUser())
        dispatch(disconnect())
        localStorage.removeItem("token")
        
        navigate(redirection, {replace: true})
    }, [dispatch, navigate, redirection])
}

export default Logout

Logout.propTypes = {
    redirection: PropTypes.string.isRequired,
}

