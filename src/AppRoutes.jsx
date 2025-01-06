import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Logout from "./pages/Logout"
import Error from "./pages/Error"
import Profile from "./pages/Profile"
import Signup from "./pages/SignUp"

function AppRoutes () {
    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/logout' element={<Logout redirection="/"/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/profile' element={<ProtectedRoute />}>
            <Route path='' element={<Profile />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default AppRoutes