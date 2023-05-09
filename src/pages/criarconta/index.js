
import Inputcriarconta from "../../components/criarconta/inputs-criarconta";
import Logo from "../../components/logo/index"

import "./styled.scss";

export default function login() {
  return (
    
      <div className="conteiner-conta">
        <Logo/>
   
      <div className="contenier-criarconta">
        <div className="criarconta">
          <h2 className="conta">Criar Conta</h2>

        
          <Inputcriarconta></Inputcriarconta>
        
        </div>
      </div>
      </div>

     
    
  );
}
