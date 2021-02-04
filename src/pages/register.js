function Register() {
  return (
    <>
      <h1>App2X</h1>
      <p>Register</p>
      <form>
        <label>
          Full Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Email:
          <input type="text" />
        </label>
        <br />
        <label>
          Password:
          <input type="text" />
        </label>
        <br />
        <label>
          Repeat Password:
          <input type="text" />
        </label>
        <br />
        <label>
          Profile Picture
          <input type="file" name="file" />
        </label>
        <br />
        <input type="submit" value="login" />
      </form>
    </>
  );
}

export default Register;
