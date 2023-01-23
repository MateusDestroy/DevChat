import "./styled.scss"

export default function input() {
  return (
    <div className="inputs">
      <label className="email-login-tela-inicial">
        <input className="email"    type={"email"}   name="email"    placeholder="Insira seu email"></input>
      </label>

      <label className="senha-login-tela-inicial">
        <input className="senha"    type={"password"}   name="email"    placeholder="Insira sua senha"></input>
      </label>
    </div>
  );
}
