import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";

import "./Register.css";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const URL = "http://localhost:4000/users";
  const RegisterForm = async () => {
    await fetch(`${URL}/register`, {
      method: "POST",
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setRedirect(true);
  };
  if (redirect) {
    window.location.href = "/login";
  }

  const OnRegister = async (e) => {
    e.preventDefault();
    RegisterForm();
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={OnRegister}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          spacing={4}
          rowSpacing={4}
          rowGap={2}
          columnSpacing={4}
        >
          <TextField
            className="textfield"
            id="outlined-basic"
            variant="outlined"
            label="First Name"
            color="secondary"
            value={firstname}
            name="firstname"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            className="textfield"
            id="outlined-basic"
            variant="outlined"
            label="Last Name"
            color="secondary"
            value={lastname}
            name="lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
          <TextField
            type="email"
            className="textfield"
            id="outlined-basic"
            variant="outlined"
            label="Email"
            color="secondary"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            className="textfield"
            id="outlined-basic"
            variant="outlined"
            label="Password"
            color="secondary"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Here we go</button>
        </Grid>
      </form>
    </div>
  );
};

export default Register;
