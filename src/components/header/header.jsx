//IMPORTS PADRÃO
import React from 'react';
import { Link } from 'react-router-dom';

//IMPORT DE ESTILO
import '../../global.scss';
import S from '../../scss/components/header/header.module.scss';

//IMPORT DE IMAGENS
import Logo from '../../assets/logo.png';


function header() {
  return (
    <header className={S.headerStyle}>
      <li>
        <Link to="/">
          <div>
            <img src={Logo} alt="Imagem de uma engrenagem com um verificado verde" />
            <h1>
              Time Saver
            </h1>
          </div>
        </Link>
      </li>
      <li>
        <Link to='/'>
          <h2>Home</h2>
        </Link>
      </li>
    </header>
  )
}

export default header