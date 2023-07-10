import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../contexts/userContexts";
import axios from "axios";

export default function Deposit() {
  const params = useParams();
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const postTransation = (e) => {
    e.preventDefault();
    if (value <= 0) {
      alert("Você precisa digitar um valor maior que zero!");
    }
    const newValue = Number(value).toFixed(2);
    const body = {
      value: newValue,
      description,
    };
    axios
      .post(`${import.meta.env.VITE_API_URL}/transation/${params.tipo}`, body, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
  if (params.tipo === "entrada") {
    return (
      <Container>
        <h1>Nova Entrada</h1>
        <Form onSubmit={postTransation}>
          <input
            data-test="registry-amount-input"
            type="text"
            placeholder="Valor"
            id="value"
            name="value"
            value={value}
            onChange={(e) => {
              const padrao = /^[0-9]*\.?[0-9]*$/;
              if (padrao.test(e.target.value)) {
                setValue(e.target.value);
              }
            }}
            required
          />
          <input
            data-test="registry-name-input"
            type="text"
            name="description"
            id="description"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button data-test="registry-save" type="submit">
            Salvar entrada
          </button>
        </Form>
      </Container>
    );
  } else if (params.tipo === "saida") {
    return (
      <Container>
        <h1>Nova Saída</h1>
        <Form onSubmit={postTransation}>
          <input
            data-test="registry-amount-input"
            type="text"
            placeholder="Valor"
            id="value"
            name="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <input
            data-test="registry-name-input"
            type="text"
            name="description"
            id="description"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button data-test="registry-save" type="submit">
            Salvar saída
          </button>
        </Form>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 1vh;
  gap: 35px;
  padding-top: 35px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #8c11be;

  h1 {
    color: #fff;
    font-size: 26px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  gap: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  input {
    width: 326px;
    height: 58px;

    border-radius: 5px;
    background: #fff;
    border: none;

    color: #000;
    font-size: 20px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 10px;
  }

  button {
    width: 326px;
    height: 46px;

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
