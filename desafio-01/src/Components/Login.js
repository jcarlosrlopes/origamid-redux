import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { autoLogin, login } from "../store/login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Usuário</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        style={{ display: "block" }}
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        style={{ display: "block" }}
      />

      <button>Enviar</button>
    </form>
  );
};

export default Login;
