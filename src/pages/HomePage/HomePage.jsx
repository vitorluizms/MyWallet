import Transation from "./Transation";
import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/userContexts";

export default function Home() {
  const [transationsObj, setObj] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(
    () =>
      async function getTransations() {
        try {
          const req = await axios.get(`${import.meta.env.VITE_API_URL}/transations`, {
            headers: { Authorization: `Bearer ${user.token}` },
          });
          console.log(req)
          setObj(req.data)
        } catch (err) {
          if (!user.token) {
            alert("Faça login!");
          } else {
            alert(err)
          }
        }
      },
    []
  );

  return (
    <Container>
      <div>
        <h1>Olá, Fulano</h1>
        <ion-icon name="log-out-outline"></ion-icon>
      </div>
      <TransationsContainer obj={transationsObj}>
        {transationsObj.length === 0 ? (
          <h2>Não há registros de entrada ou saída</h2>
        ) : (
          transationsObj.map((transation) => (
            <Transation key={transation.description} transation={transation} />
          ))
        )}
      </TransationsContainer>
      <div>
        <DepositContainer>
          <ion-icon name="add-circle-outline"></ion-icon>
          <div>
            <p>Nova</p>
            <p>Entrada</p>
          </div>
        </DepositContainer>
        <CashoutContainer>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <div>
            <p>Nova</p>
            <p>Saída</p>
          </div>
        </CashoutContainer>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  gap: 25px;
  padding-top: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 26px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  & > div:first-child {
    width: 326px;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }

  & > div:last-child {
    width: 326px;
    height: 100%;
    gap: 15px;

    display: flex;
  }

  ion-icon {
    font-size: 28px;
    color: #fff;
  }
`;

const TransationsContainer = styled.div`
  width: 326px;
  height: 446px;
  padding: 23px 12px 23px 12px;
  gap: 20px;
  overflow-y: scroll;

  border-radius: 5px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.obj.length === 0 ? "center" : "")};

  h2 {
    color: #868686;
    text-align: center;
    font-size: 20px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  div {
    width: 303px;
    height: 16px;

    display: flex;
    justify-content: space-between;

    div {
      max-width: 160px;
      height: 100%;
      word-break: break-all;
      margin-left: -20px;
    }
  }
`;

const DepositContainer = styled.div`
  width: 155px;
  height: 114px;
  flex-shrink: 0;
  padding: 9px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 5px;
  background: #a328d6;

  p {
    color: #fff;
    font-size: 17px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const CashoutContainer = styled.div`
  width: 155px;
  height: 114px;
  flex-shrink: 0;
  padding: 9px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 5px;
  background: #a328d6;

  p {
    color: #fff;
    font-size: 17px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
