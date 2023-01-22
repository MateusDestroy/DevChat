import "./styled.scss";

export default function inputschat() {
  return (
    <div className="conteiner-input-button">
      <div className="buttons-inputs-chat">
        <div className="inputs-info-sala">
          <div className="info-sala">
         
            <label className="info-nome-sala">Sala :</label> <input type="text" name="sala" value="" />
            <button className="Criar">Criar</button>
          </div>
        </div>

        <div className="inputs-info-nick">
          <div className="info-nick">
           
          <label className="info-nome-nick">Nick :</label>  <input type="text" name="Nick" value="" />
            <button className="Entra"> Entra</button>
          </div>
        </div>
      </div>

      <div className="input-mensagens">
        <label className="mensgens"> Mensagens :</label>
        <div className="info-texto-chat">
         <textarea className="texto-chat"></textarea>
         <button className="enviar"> {'>'} </button>
         </div>
      </div>
    </div>
  );
}
