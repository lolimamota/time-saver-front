import React from 'react';
import './global.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// -------------- IMPORT DE ROTAS E COMPONENTS --------------
import Novo_agendamento from './components/agendamento/post_agenda.jsx';
import Ver_agendamento from './components/verificar/get_agenda.jsx';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';


function App() {
  return (
    <>
    <Header />
      <main>
        <BrowserRouter>
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
            </ul>
            <Routes>
              <Route path="/novo_agendamento" element={<Novo_agendamento />} />
              <Route path="/ver_agendamento" element={<Ver_agendamento />} />
            </Routes>
          </nav>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  )
}

export default App