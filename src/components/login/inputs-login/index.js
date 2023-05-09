/* eslint-disable react-hooks/rules-of-hooks */

import { Link } from "react-router-dom";
import { useState } from "react";

import Cookies from "js-cookie";
import "./styled.scss";

import Api from "../../../services/api";
import { useNavigate } from "react-router-dom";




const api = new Api();


export default function input() {

 const [mostrar, setMostar] = useState(false);
 
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const navig = useNavigate();


  const MostrarSenha = () => {
    setMostar ((mostrar) => !mostrar );
  }


  const logar = async () => {
    let resp = await api.login(login, senha);
    if (resp.erro) {
    } else {
      Cookies.set("usuario-logado", JSON.stringify(resp));
      navig("/Chat");
    }
  };



  return (

  
    <div className="inputs">
      
    
      <label className="email-login-tela-inicial">
        <input
          className="email"
          type={"email"}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Insira seu email"
        ></input>
      </label>

      <label className="senha-login-tela-inicial">
        <input
          className="senha"
          value={senha}
          type={mostrar ? "text" : "password"}

          onChange={(e) => setSenha(e.target.value)}
          placeholder="Insira sua senha"
        ></input>
      </label>

      <label className="ver-senha-checkbox"> 
        <div className="ver-senha"><input className="ver" type={"checkbox"} checked = {mostrar} onChange={MostrarSenha}></input> <label>Mostrar senha</label></div>
      </label>

      <div className="buttons-login">
        <Link className="criar" to="CriarConta">
          <div> Criar Conta </div>{" "}
        </Link>
        <button className="button-entra" onClick={logar} type="entra">
          Entra
        </button>
      </div>
    </div>
  );
}
