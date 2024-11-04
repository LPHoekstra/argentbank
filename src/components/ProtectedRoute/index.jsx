import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {

    const isAuthenticated = () => {
        return Boolean(localStorage.getItem("token"))
    }

    if (!isAuthenticated()) {
        return <Navigate to="/signin" replace />
    }

    return children
}

export default ProtectedRoute