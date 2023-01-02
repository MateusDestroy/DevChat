import Buttonslogin from "../../components/login/buton-login";
import Inputslogin from "../../components/login/inputs-login";
import Logo from "../../components/logo/index"

import "./styled.scss";

export default function login() {
  return (
    <body>
      <div className="conteiner-logo">
        <Logo/>
      </div>
      <div className="contenier-login">
        <div className="login">
          <h2>Login</h2>

          <Inputslogin/>
          <Buttonslogin/>
          <></>
        </div>
      </div>

     
    </body>
  );
}
