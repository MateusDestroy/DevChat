export default function input() {
  return (
    <div className="inputs">
      <label className="email-login">
        <input className="email"    type={"email"}   name="email"    placeholder="insira seu email"></input>
      </label>

      <label className="senha-login">
        <input className="senha"    type={"password"}   name="email"    placeholder="insira sua senha"></input>
      </label>
    </div>
  );
}
