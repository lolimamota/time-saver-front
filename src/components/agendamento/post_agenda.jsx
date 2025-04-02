import React from 'react';

function post_agenda() {
  return (
    <main>
      <h2>Preencha as informações:</h2>
      <form>
        <input type="text" id="nome" placeholder="Digite seu nome" name="nome" />
        <input type="data" id="dia" name="dia" placeholder="Escolha a data disponível" />
        <input type="time" id="horario" name="horario" />
        <select name="especialidade_exame" id="especialidade_exame">
        <option value="home">Selecione uma opção</option>
          <option value="tresdias">
            Exames Laboratoriais
          </option>
          <option value="setedias">
            Pediatria, Clinico, Ginecologia, Cirurgia Geral
          </option>
          <option value="catorzedias">
            Demais Especialidades
          </option>
          <option value="dezdias">
            Fono, Nutri, Psicologia, TO, Fisio
          </option>
          <option value="vinteumdias">
            Exames complexos
          </option>
        </select>
        <select name="convenio" id="convenio">
          <option value="home">Selecione uma opção</option>
          <option value="amil">Amil</option>
          <option value="bradesco">Bradesco Saúde</option>
          <option value="unimed">Unimed</option>
          <option value="sulamerica">SulAmérica Saúde</option>
          <option value="porto_seguro">Porto Seguro Saúde</option>
          <option value="notredame">NotreDame Intermédica</option>
          <option value="hapvida">Hapvida</option>
          <option value="golden_cross">Golden Cross</option>
          <option value="allianz">Allianz Saúde</option>
          <option value="care_plus">Care Plus</option>
          <option value="bio_saude">Bio Saúde</option>
          <option value="medial_saude">Medial Saúde</option>
          <option value="prevent_senior">Prevent Senior</option>
          <option value="sao_francisco">São Francisco Saúde</option>
          <option value="santa_helena">Santa Helena Saúde</option>
          <option value="promed">Promed</option>
          <option value="vitallis">Vitallis Saúde</option>
          <option value="greenline">GreenLine Saúde</option>
          <option value="intermedica">Intermédica Saúde</option>
          <option value="trasmontano">Trasmontano Saúde</option>
          <option value="assim_saude">Assim Saúde</option>
          <option value="plena_saude">Plena Saúde</option>
          <option value="life_saude">Life Saúde</option>
          <option value="sao_camilo">Clínica São Camilo</option>
          <option value="grupo_saude_brasil">Grupo Saúde Brasil</option>

        </select>
      </form>
      <button>Agendar</button>
      <button>Menu Principal</button>
    </main>
  )
}

export default post_agenda