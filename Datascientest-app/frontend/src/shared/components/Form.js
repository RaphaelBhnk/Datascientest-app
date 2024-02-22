import React, { useState } from "react";
import Input from "./Input";
const Form = (props) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleCreate = async (event) => {
    event.preventDefault();
    let response;
    let data;
    try {
      data = await fetch("http://localhost:8080/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: mail,
          password: password,
        }),
      });
      response = await data.json();
      setMessage(response.message);
    } catch (error) {}
  };
  const handleConnect = async (event) => {
    event.preventDefault();
    let response;
    let data;
    try {
      data = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: mail,
          password: password,
        }),
      });
      response = await data.json();
      setMessage(response.message);
    } catch (error) {}
  };
  return (
    <form className="form-wrapper">
      <p>{props.text}</p>
      <Input
        text="mail"
        id="mail"
        type="text"
        value={mail}
        handleChange={(event) => setMail(event.target.value)}
      ></Input>
      <Input
        text="Password"
        type="password"
        value={password}
        handleChange={(event) => setPassword(event.target.value)}
      ></Input>
      <button onClick={handleCreate}>Creer un compte</button>
      <button onClick={handleConnect}>Se connecter</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Form;
