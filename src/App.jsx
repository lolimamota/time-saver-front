import React from 'react';
import './global.scss';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

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
              {/* <li>
                <Link to='/'>
                  Home
                </Link>
              </li> */}
              <li>
                <Link to='/home/novo_agendamento'>
                  Novo Agendamento
                </Link>
              </li>
              <li>
                <Link to='/home/ver_agendamento'>
                  Agendamentos anteriores
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/home" element={<Home />}>
            <Route path='novo_agendamento' element={<Novo_agendamento />} />
            <Route path='ver_agendamento' element={<Ver_agendamento />} />
          </Route>

          <Route path="/novo_agendamento" element={<Navigate to="/home/novo_agendamento" />} />
          <Route path="/ver_agendamento" element={<Navigate to="/home/ver_agendamento" />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter >
  )
}

export default App