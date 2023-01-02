import "./styled.scss"

export default function inputcriarconta() {
  return (
    <div className="inputs">
      <label className="email-login">
        <input className="email"    type={"email"}   name="email"    placeholder="Insira seu email"></input>
      </label>

      <label className="input-senha">
        <input className="senha"    type={"email"}      placeholder="Insira sua senha"></input>
      </label>

      <label className="input-senha">
        <input className="senha"    type={"email"}     placeholder="Repita sua senha"></input>
      </label>


    </div>
  );
}
