import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setPass] = useState("");
  const [validPass, setValid] = useState("true");

  function signUp(e) {
    e.preventDefault();
    const body = {
      name,
      email,
      password 
    };
    console.log(body)
  }

  return (
      <Container validpass={validPass}>
        <h1>MyWallet</h1>
        <Form onSubmit={signUp} email={email}>
          <input
            placeholder="Nome"
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          <input
            placeholder="E-mail"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <input
            placeholder="Senha"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <input
            placeholder="Confirme a senha"
            id="confirmPass"
            name="confirmPass"
            type="password"
            value={confirmPass}
            onChange={(e) => {
              setPass(e.target.value);
              if (password !== e.target.value) {
                setValid("false");
              } else {
                setValid("true");
              }
            }}
            required
          ></input>
          <button>Cadastrar</button>
        </Form>
        <p>
          Parece que as senhas inseridas não são iguais. Por favor, tente
          novamente!
        </p>
        <p>
          Já tem uma conta?
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <strong> Entre agora!</strong>
          </Link>
        </p>
      </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 38px;

  h1 {
    color: #fff;
    font-size: 32px;
    font-family: Saira Stencil One;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  p:nth-child(3) {
    width: 326px;
    height: 58px;
    margin-top: -28px;
    display: ${(props) => (props.validpass === "true" ? "none" : "")};

    color: red;
    font-size: 15px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;

    word-break: break-word;
  }

  p {
    color: #fff;
    font-size: 15px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  strong {
    color: #00b7f3;
    text-decoration-line: none;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 13px;

  input {
    width: 326px;
    height: 58px;

    border-radius: 5px;
    background: #fff;

    color: #000;
    font-size: 20px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  button {
    width: 326px;
    height: 58px;

    border-radius: 5px;
    background: #a328d6;
    border: none;

    color: #fff;
    font-size: 20px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
