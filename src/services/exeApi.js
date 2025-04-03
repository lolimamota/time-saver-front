import axios from "axios";

// -------------- CONFIGURAÇÃO DO AXIOS --------------

const enviarDados = axios.create({
    urlBaseApi: "https://time-saver-api.onrender.com/",
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
});

//-------------- FUNÇÕES --------------
// NOVA AGENDA
//POST

export const novaAgenda = async (dados) => {
    try{
        const response = await enviarDados.post('/agendamentos' , dados);
        return response.dados;
    } catch(error){
        console.error('Agendamento não foi concluído, tente novamente mais tarde!' , error);
        throw error;
    }
};


//GET

export const pegarAgenda = async () => {
    try{
        const response = await enviarDados.get('/visualizar');
        return response.dados;
    } catch(error) {
        console.error('Agendamento não localizado!', error);
        throw error;
    }
}