import { useState } from "react";
import { Link, Redirect } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("blabla@gmail.com");
  const [password, setPassword] = useState("123321");
  //   const [redi];
  const [userId, setUserId] = useState(null);

  const heandleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };
    fetch("http://localhost:3000/api/auth/login", requestOptions)
      .then((response) => response.json())
      .then((data) => setUserId(data));
  };

  return (
    <>
      {userId && <Redirect to="/all" />}
      <h1>App2X</h1>
      <p>login</p>
      <form onSubmit={(e) => heandleSubmit(e)}>
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
            type="password"
            placeholder={`${password}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <Link to="/register">Register</Link>
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default Login;
