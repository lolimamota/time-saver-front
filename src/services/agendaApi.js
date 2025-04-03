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
    }
};


//GET

export const pegarAgenda = async () => {
    try{
        const response = await enviarDados.get('/visualizar');
        return response.dados;
    } catch(error) {
        console.error('Agendamento não localizado!', error);
    }
}

// PUT

export const mudarAgenda = async (id, dados) => {
    try{
        const response = await mudarAgenda.put(`/update/${id}` , dados);
        return response.dados;
    } catch (error) {
        console.error(`Agendamento ${id}, não pode ser atualizado, tente novamente mais tarde!` , error);
    }
}

//DELETE

export const excluirAgenda = async(id) => {
    try{
        const response = await excluirAgenda.delete(`/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Agendamento ${id}, não pode ser atualizado, tente novamente`)
    }
}