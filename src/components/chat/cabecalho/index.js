import { Link } from "react-router-dom";
import "./styled.scss";

export default function Cabecalho() {
  return (
    <header>
    <ul className="chat-cabecalho">
      <li className="img-logo">
        <img src="assets/image/logo.svg" alt="" srcset="" />
        <div className="logo-img">Chat</div>
      </li>

      <Link to="/">
        {" "}
        <li className="sair">
          {" "}
          <img src="assets/image/sair.svg" alt="" />
        </li>
      </Link>
    </ul>
    </header>
  );
}
