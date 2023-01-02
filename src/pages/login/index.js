import Inputslogin from "../../components/login";
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
          <div>Login</div>

          <Inputslogin></Inputslogin>
        </div>
      </div>

     
    </body>
  );
}
