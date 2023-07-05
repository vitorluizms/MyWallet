import React from "react";
import styled from "styled-components";

export default function Deposit() {
  return (
    <Container>
      <h1>Nova Entrada</h1>
      <Form>
        <input
          type="text"
          pattern="^\d+(\.\d{1,2})?$"
          placeholder="Valor"
          id="value"
          name="value"
          required
        />
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Descrição"
          required
        />
        <button>Salvar entrada</button>
      </Form>
    </Container>
  );
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
