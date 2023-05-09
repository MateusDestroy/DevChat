/* eslint-disable react-hooks/rules-of-hooks */

import Api from "../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";

import { useState } from "react";

import "./styled.scss";

export default function inputcriarconta() {
  const api = new Api();

  const [login, setLogin] = useState("");

  const [senha, setSenha] = useState("");

  const [nick, setNick] = useState("");



  const inserirUsuario = async () => {
    let resp = await api.inserirUsuario(login, senha, nick);
    if (resp.erro) {
      toast.error("Credenciais inválidas!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } 
    
    else {
      toast.success("Usuario criado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });   
  };
}

  return (
    <div className="inputs">
      <label className="email-login">
        <input
          className="inputs-cadastro"
          type={""}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Insira seu email"
        ></input>
      </label>

      <label className="input-senha">
        <input
          className="inputs-cadastro"
          type={""}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Insira sua senha"
        ></input>
      </label>

      <label className="input-senha">
        <input
          className="inputs-cadastro"
          type={""}
          value={nick}
          onChange={(e) => setNick(e.target.value)}
          placeholder="Insira seu nome"
        ></input>
      </label>

      <div className="buttons-login">
        <button
          className="CriarContaButton"
          onClick={() => inserirUsuario()}
          type=""
        >
          Criar Conta
        </button>{" "}
        <ToastContainer></ToastContainer>
        
        <Link className="voltar" to="/">
          {" "}
          <div> Voltar para a tela de login </div>
        </Link>
      </div>
    </div>
  );
}
