import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home'
import Voce from './components/pages/Voce'
import Negocio from './components/pages/Negocio'
import Agronegocio from './components/pages/Agronegocios'
import Publico from './components/pages/Publico'
import Conta from './components/pages/ContaPage/Conta';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pra-voce" element={<Voce />} />
        <Route path="/pro-seu-negocio/" element={<Negocio />} />
        <Route path="/agronegocios/" element={<Agronegocio />} />
        <Route path="/setor-publico/" element={<Publico />} />
        <Route path="/conta" element={<Conta />} />
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
