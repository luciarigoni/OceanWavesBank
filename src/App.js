import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home'
import Voce from './components/pages/Voce'
import Negocio from './components/pages/Negocio'
import Agronegocio from './components/pages/Agronegocios'
import Publico from './components/pages/Publico'
import Conta from './components/pages/ContaPage/Conta';

import { AuthContext } from './context/auth';

function App() {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    console.log('login auth', {email, password});
    setUser({id: '123', email})
  }

  const logout = () => {
    console.log('logout');
  }

  return (
    <Router>
      <AuthContext.Provider value={{authenticated: !!user, user, login}}>
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
      <Footer />
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
