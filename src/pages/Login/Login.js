import { TextField } from "@mui/material";
import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const LoginSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const token = await response.json();
      localStorage.setItem("token", token["jwt"]);
      setUser(token);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error.message);
    }
  };

  const onLogin = async (e) => {
    e.preventDefault();
    LoginSubmit();
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={onLogin}>
        <TextField
          className="textfield"
          id="outlined-basic"
          variant="outlined"
          label="email"
          color="secondary"
          value={email}
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="textfield"
          id="outlined-basic"
          variant="outlined"
          label="password"
          color="secondary"
          value={password}
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
