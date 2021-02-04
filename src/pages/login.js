import { useState } from "react";
import useCrud from "../hooks/useCrud";

function Login() {
  const [email, setEmail] = useState("blabla@gmail.com");
  const [password, setPassword] = useState("123321");
  const { onAdd } = useCrud();
  return (
    <>
      <h1>App2X</h1>
      <p>login</p>
      <form>
        <label>
          Email:
          <input
            type="text"
            placeholder={`${email}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            placeholder={`${password}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="login" />
      </form>
    </>
  );
}

export default Login;
