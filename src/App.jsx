import { BrowserRouter as Router } from 'react-router-dom';
import "./styles/main.scss";
import Header from './containers/Header';
import Footer from './containers/Footer';
import { useSelector } from 'react-redux';
import Loaders from './components/Loaders';
import IsConnected from './components/IsConnected';
import AppRoutes from './AppRoutes';

function App() {
  const isLoading = useSelector((state) => state.loaders.isLoading)
  const isConnected = useSelector((state) => state.auth.isConnected)

  return (
    <>
      {isLoading && <Loaders />}
      {!isConnected && <IsConnected />}
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
