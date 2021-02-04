import { useState } from "react";
import { Link, Redirect } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [registerStatus, setRegisterstatus] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const heandleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (password === repeatPassword) {
      setMessage(null);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      };
      fetch("http://localhost:3000/api/auth/register", requestOptions)
        .then((response) => response.json())
        .then((data) => setRegisterstatus(data));
    } else {
      setMessage("passwords don't match");
    }
    console.log(registerStatus);
    registerStatus && registerStatus.userId && setRedirect(true);
  };

  return (
    <>
      {redirect && <Redirect to="/" />}
      <h1>App2X</h1>
      <p>Register</p>
      <form
        onSubmit={(e) => {
          heandleSubmit(e);
        }}
      >
        <label>
          Full Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Repeat Password:
          <input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </label>
        {message && <p>{message}</p>}
        <br />
        <label>
          Profile Picture
          <input type="file" name="file" />
        </label>
        <br />
        <Link to="/login">login</Link>
        <br />
        <input type="submit" value="register" />
      </form>
    </>
  );
}

export default Register;
