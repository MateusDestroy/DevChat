import Cabecalho from "../../components/chat/cabecalho";
import Inputschat from "../../components/chat/inputs-chat";
import "./styled.scss";

export default function Chat() {
  return (
    <div className="conteiner-chat">
      <Cabecalho></Cabecalho>
      <div className="conteiner-mensagens-chat">
        <div className="chat">
          <div className="mensagens-chat">
            <div className="mensagens">  <label className="horas">(18:03:01)  </label>  <label className="usuario-nome">MateusDestroy </label> <label className="mensagem-chat-usuario">Entrou na Sala...</label></div>
            <div className="mensagens">  <label className="horas">(18:03:01)  </label>  <label className="usuario-nome">MateusDestroy </label> <label className="mensagem-chat-usuario">fala para <span>Todos: </span></label><label className="mensagem-usuario">Opa Boa Tarde</label></div>
            <div className="mensagens">  <label className="horas">(18:03:01)  </label>  <label className="usuario-nome">MateusDestroy </label> <label className="mensagem-chat-usuario"> Saiu da Sala...</label></div>
       
          </div>
        </div>

         <Inputschat></Inputschat>
     </div>
    </div>
  );
}
