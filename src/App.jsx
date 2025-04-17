import React from 'react';
import './global.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// -------------- IMPORT DE ROTAS E COMPONENTS --------------
import Novo_agendamento from './components/agendamento/PostAgenda.jsx';
import Ver_agendamento from './components/verificar/GetAgenda.jsx';
import Home from './components/home/Home.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

//-------- IMPORTS DE ESTILO ------

import S from './scss/components/app/app.module.scss';


function App() {
  return (

    <BrowserRouter>
      <main className={S.appStyle}>
        <Header />
        <section>
          <nav>
            <ul>
              <li>
                <Link to="/novo_agendamento">
                  Novo agendamento
                </Link>
              </li>
              <li>
                <Link to="/ver_agendamento">
                  Agendamentos anteriores
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
            </ul>
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/novo_agendamento" element={<Novo_agendamento />} />
              <Route path="/ver_agendamento" element={<Ver_agendamento />} />
            </Routes>
          </nav>
        </section>
        <Footer />
      </main>
    </BrowserRouter >
  )
}

export default App