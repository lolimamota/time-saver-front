//IMPORTS PADRÃO
import React from 'react'

//IMPORT DE ESTILO
import '../../global.scss';
import S from '../../scss/components/header/header.module.scss';


function header() {
  return (
    <header className={S.headerStyle}>
      <h1>Time Saver</h1>
    </header>
  )
}

export default header