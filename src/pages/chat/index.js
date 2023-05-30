import Cabecalho from "../../components/chat/cabecalho";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styled.scss";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from 'js-cookie'
import Api from "../../services/api";
const api = new Api();

function verUsuariologin(navigation) {

  let logado = Cookies.get("usuario-logado");
  if (logado === null) {
    navigation.push("/");
    return null;
  }

  let usuarioLogado = JSON.parse(logado);
  return usuarioLogado;
}

export default function Chat() {
  const navig = useNavigate();
  let usuarioLogado = verUsuariologin(navig) || {};

  const [chat, setChat] = useState([]);
  const [sala, setSala] = useState('');
  const [usu] = useState(usuarioLogado.nm_nick);
  const [msg, setMsg] = useState('');

  const validarResposta = (resp) => {
    console.log(resp);
    if (!resp.erro)

     return true;
     toast.error(`${resp.erro}`);

    return false;


  };

  const puxarmensagem = async () => {
    const mensagens = await api.listarMensagens(sala);
    if (validarResposta(mensagens))
    
    setChat(mensagens);
 
  };

  const enviarMensagem = async (event) => {
    if (event.type === "keypress" && (!event.ctrlKey || event.charCode !== 13))
      return;

    const resp = await api.inserirMensagem(sala, usu, msg);
    if (!validarResposta(resp)) return;

    toast.dark('💕 Mensagem enviada com sucesso!');
    await puxarmensagem();

    
  };


  const inserirSala = async () => {
    const resp = await api.inserirSala(sala);
    if (!validarResposta(resp)) return;

    toast.dark('💕 Sala cadastrada!');
    await puxarmensagem();


   
  };



  
 


  


 

  return (
    <div className="conteiner-chat">
         
      <Cabecalho></Cabecalho>
      <ToastContainer />
      <div className="conteiner-mensagens-chat">
      
        <div className="chat">
          {chat.map(x => 
              <div className="mensagens-chat" key={x.id_chat}>
                <div className="mensagens">
                  <div className="usuario-nome">{x.tb_usuario.nm_nick} </div>
                  <div className="mensagem-chat-usuario">
                    fala para <span>Todos: </span>
                  </div>
                  <div className="mensagem-usuario">{x.ds_mensagem}</div>
                </div>
              </div>
        
          )}
        </div>

        <div className="conteiner-input-button">
          <div className="buttons-inputs-chat">
            <div className="inputs-info-sala">
              <div className="info-sala">
                <label className="info-nome-sala">Sala :</label>
                <input
                  className="sala"
                  type="text"
                  value={sala}
                  onChange={e => setSala(e.target.value)}

                />
                <button className="Criar" onClick={inserirSala}>Criar</button>
              </div>
            </div>

            <div className="inputs-info-nick">
              <div className="info-nick">
                <label className="info-nome-nick">Nick :</label>
                <input className="nick" type="text" value={usu}  readOnly={true} />
                <button className="Entra" onClick={puxarmensagem}> Entra</button>
              </div>
            </div>
          </div>

          <div className="input-mensagens">
            <label className="mensgens"> Mensagens :   <button className="carregar" onClick={puxarmensagem}> Carregar</button> </label>
            <div className="info-texto-chat">
              <textarea className="texto-chat" value={msg} onChange={e => setMsg(e.target.value)} onKeyPress={enviarMensagem}></textarea>
              <div className="enviar-button">
                <button className="enviar" onClick={enviarMensagem}> {">"} </button>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
