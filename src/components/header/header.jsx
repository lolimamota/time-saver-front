//IMPORTS PADRÃO
import React from 'react'

//IMPORT DE ESTILO
import '../../global.scss';
import S from '../../scss/components/header/header.module.scss';

//IMPORT DE IMAGENS
import Logo from '../../assets/logo.png';


function header() {
  return (
    <header className={S.headerStyle}>
      <a href="/">
        <div>
          <img src={Logo} alt="Imagem de uma engrenagem com um verificado verde" />
          <h1>
            Time Saver
          </h1>
        </div>
      </a>
    </header>
  )
}

export default header