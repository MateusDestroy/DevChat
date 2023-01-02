import Buttonscriaconta from "../../components/criarconta/buttons-criaconta";
import Inputcriarconta from "../../components/criarconta/inputs-criarconta";
import Logo from "../../components/logo/index"

import "./styled.scss";

export default function login() {
  return (
    <body>
      <div className="conteiner-logo">
        <Logo/>
      </div>
      <div className="contenier-criarconta">
        <div className="criarconta">
          <h2>Criar Conta</h2>

        
          <Inputcriarconta></Inputcriarconta>
          <Buttonscriaconta></Buttonscriaconta>
        </div>
      </div>

     
    </body>
  );
}
