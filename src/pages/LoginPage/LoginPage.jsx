import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link, json, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../contexts/userContexts";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function signIn(e) {
    e.preventDefault();
    try {
      const body = { email, password };
      const req = await axios.post(
        `${import.meta.env.VITE_API_URL}/sign-in`,
        body
      );
      localStorage.setItem("user", JSON.stringify(req.data));
      setUser(req.data);
      navigate("/home");
    } catch (err) {
      alert(err.response.data);
    }
  }
  return (
    <Container>
      <h1>MyWallet</h1>
      <Form onSubmit={signIn}>
        <input
          data-test="email"
          placeholder="E-mail"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          data-test="password"
          placeholder="Senha"
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button data-test="sign-in-submit" type="submit">
          Entrar
        </button>
      </Form>
      <p>
        Primeira vez?{" "}
        <Link to={"/cadastro"} style={{ textDecoration: "none" }}>
          <strong> Cadastre-se</strong>
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
