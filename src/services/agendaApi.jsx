import {use, useState} from "react";
import axios from "axios";

export default function agendamento(){
    const [dia, setDia] = useState("");
    const [horario, setHorario] = useState("");
    const [nome, setNome] = useState("");
    const [convenio, setConvenio] = useState("");
    const [especialidade, setEspecialidade] = useState("");

    const enviarDados = async()=>{
        const urlAPI = "https://time-saver-api.onrender.com/agendamento"

        const enviarComo = {
            nome,
            horario,
            dia,
            especialidade,
            convenio,
        }

        try{
            const enviarApi = await axios.post(urlAPI, enviarDados);
            console.log("Dados enviados, atendimento agendado:" , enviarApi.data);
            agendaDados();
        } catch(error){
            console.error("Erro ao enviar dados, agendamento não realizado");
        }
    }
}