import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavbarComp';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
