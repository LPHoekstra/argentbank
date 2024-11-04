import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {
    const isConnected = useSelector((state) => state.auth.isConnected)

    if (!isConnected) {
        return <Navigate to="/signin" replace />
    }

    return children
}

export default ProtectedRoute