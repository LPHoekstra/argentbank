import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import "./styles/base.scss";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Error from "./pages/Error"
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<SignIn />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
