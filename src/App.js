import './styles/IndexStyle.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import { Navbar } from './components/Item/Navbar';
import BombachaList from './components/bombachas/BombachaList';
import BikinisList from './components/bikinis/BikinisList';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/bikinis' element={<BikinisList/>} />
        <Route path='/bombachas' element={<BombachaList/>} />
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
