import "./styled.scss";
import Cabecalho from "../../components/chat/cabecalho";

export default function Chat() {
  return (
    <div className="conteiner-chat">
      <Cabecalho></Cabecalho>
      <div className="conteiner-mensagens-chat">
        <div className="chat">
          <div className="mensagens-chat">
            <div className="mensagens"></div>
          </div>
        </div>

        <div className="buttons-inputs-chat"></div>
      </div>
    </div>
  );
}
