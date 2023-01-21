import Buttonslogin from "../../components/login/buton-login";
import Inputslogin from "../../components/login/inputs-login";
import Logo from "../../components/logo/index"

import "./styled.scss";

export default function login() {
  return (
    
      <div className="conteiner-tela-login">
        <Logo/>
     
      <div className="contenier-login">
        <div className="login">
          <h2 className="login-nome">Login</h2>

          <Inputslogin/>
          <Buttonslogin/>
        
        </div>
      </div>
     </div>

     
    
  );
}
