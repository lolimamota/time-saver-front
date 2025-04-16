//IMPORTS GLOBAIS
import React from 'react'

//IMPORTS DE IMAGEM
import Insta from '../../assets/insta.png';
import Wpp from '../../assets/wpp.png';
import Mail from '../../assets/mail.png';
import Site from '../../assets/site.png';

//IMPORTS DE ESTILO
import S from '../../scss/components/footer/footer.module.scss'

function footer() {
  return (
    <footer className={S.footerStyle}>
      <ul className={S.firstColumn}>
        <li>
          <a href="https://timesaver.com.br/m/" target='_blank'>
            <img src={Site} alt="Icone circular representando o planeta indicando o link para o site da TimeSaver" />
          </a>
        </li>
        <li >
          <a href="https://www.instagram.com/timesaverbr/" target='_blank'>
            <img src={Insta} alt="logo do Instagram" />
          </a>
        </li>
      </ul>
      <div className={S.secondColumn}>
        <p>Design criado para o processo seletivo Time Saver - 2025</p>
        <p>Todos os direitos reservados</p>
      </div>
      <ul className={S.thirdColumn}>
        <li>
          <a href="https://api.whatsapp.com/send/?phone=5541998040107&text&type=phone_number&app_absent=0" target='_blank'>
            <img src={Wpp} alt="Logo do WhatsApp" />
          </a>
        </li>
        <li>
          <a href="mailto:contato@timesaver.com.br">
            <img src={Mail} alt="Icone de uma carta fechada indicando acesso ao envio de um email para a TimeSaver" />
          </a>
        </li>
      </ul>

    </footer>
  )
}

export default footer