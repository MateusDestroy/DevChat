
import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api {


///// chat - sala - nick


    async listarMensagens(idSala) {
        let DataSala = await api.get(`/chat/${idSala}`);
        return DataSala.data;
    }

    async inserirMensagem (nomeSala, nomeUsuario, mensagem) {
        let chat= {
            sala: {
                nome: nomeSala
            }, 
            
            usuario: {
                nome: nomeUsuario
            },
            mensagem: mensagem
        }

        let DataChat = await api.post(`/chat`, chat ); 
        return DataChat.data;
    }


    async inserirSala(sala) {
        let DataInsertSala = await api.post(`/sala`, {sala: sala});
        return DataInsertSala.data;
    }


    
//////////// login - cadastro

    async login (login , senha) {
        let l = await api.post('/login', {login, senha});
        return l.data;
    }

    async inserirUsuario (login, senha, nick) {
        let Cadastro = await api.post (`/cadastro`, { email: login, senha: senha, nick: nick});
        return Cadastro.data;
    }

}







