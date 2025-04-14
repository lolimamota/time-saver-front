//IMPORTS GLOBAIS
import React from 'react'

//IMPORTS DE IMAGEM
//IMPORTS DE ESTILO
import S from '../../scss/components/footer/footer.module.scss'

function footer() {
  return (
    <footer className={S.footerStyle}>
      <p>Design criado para o processo seletivo Time Saver - 2025</p>
      <p>Todos os direitos reservados</p>
      <ul>
        <li>
          <a href="https://www.instagram.com/timesaverbr/" target='_blank'>Imagem do instagram</a>
        </li>
        <li>
          <a href="https://timesaver.com.br/m/">Imagem do site</a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send/?phone=5541998040107&text&type=phone_number&app_absent=0">Imagem do Wpp</a>
        </li>
        <li>
          <a href="mailto:contato@timesaver.com.br">Imagem do email</a>
        </li>
      </ul>

    </footer>
  )
}

export default footer