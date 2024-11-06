import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/base.scss";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Error from "./pages/Error"
import User from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Logout from './pages/Logout';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/profile' element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        } />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
