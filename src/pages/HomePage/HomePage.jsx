import Transation from "./Transation";
import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/userContexts";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [transationsObj, setObj] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    console.log(user);
    axios
      .get(`${import.meta.env.VITE_API_URL}/transations`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((req) => {
        console.log(req);
        setObj(req.data);
        let count = 0;
        req.data.forEach((element) => {
          if (element.type === "entrada") {
            count += Number(element.value);
          } else {
            count -= Number(element.value);
          }
        });
        setBalance(count.toFixed(2));
      })
      .catch((err) => {
        if (!user.token) {
          alert("Faça login!");
          navigate("/");
        } else {
          alert(err);
        }
      });
  }, []);

  function logOut() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <Container>
      <div>
        <h1 data-test="user-name">Olá, {user.name}</h1>
        <ion-icon
          data-test="logout"
          name="log-out-outline"
          onClick={logOut}
        ></ion-icon>
      </div>
      <TransationsContainer obj={transationsObj}>
        {transationsObj.length === 0 ? (
          <h2>Não há registros de entrada ou saída</h2>
        ) : (
          <>
            {transationsObj.map((transation, index) => (
              <Transation key={index} transation={transation} />
            ))}
            <ContainerBalance balance={balance}>
              <h3>SALDO</h3>
              <p data-test="total-amount">{balance}</p>
            </ContainerBalance>
          </>
        )}
      </TransationsContainer>
      <div>
        <Link
          to={"/nova-transacao/:entrada"}
          style={{ textDecoration: "none" }}
        >
          <DepositContainer data-test="new-income">
            <ion-icon name="add-circle-outline"></ion-icon>
            <div>
              <p>Nova</p>
              <p>Entrada</p>
            </div>
          </DepositContainer>
        </Link>
        <Link to={"/nova-transacao/:saida"} style={{ textDecoration: "none" }}>
          <CashoutContainer data-test="new-expense">
            <ion-icon name="remove-circle-outline"></ion-icon>
            <div>
              <p>Nova</p>
              <p>Saída</p>
            </div>
          </CashoutContainer>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0px;

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
    position: absolute;
    top: 25px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }

  & > div:last-child {
    width: 326px;
    gap: 15px;
    position: absolute;
    top: 537px;

    display: flex;
  }

  ion-icon {
    font-size: 28px;
    color: #fff;
  }
`;

const ContainerBalance = styled.div`
  width: 326px;
  height: 30px;
  margin-top: 393px;
  position: fixed;
  z-index: 2;
  background-color: white;
  padding: 0px 12px 0px 12px;
  display: flex;
  justify-content: space-between;

  h3 {
    color: #000;
    font-family: Raleway;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    color: ${props => props.balance >= 0 ? "#03ac00": "#c70000"};
    text-align: right;
    font-family: Raleway;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const TransationsContainer = styled.div`
  width: 326px;
  height: 446px;
  padding: 23px 12px 23px 12px;
  overflow-y: scroll;
  position: relative;
  top: 78px;
  left: 0px;

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
`;

const DepositContainer = styled.button`
  width: 155px;
  height: 114px;
  padding: 9px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 5px;
  background: #a328d6;
  border: none;

  p {
    color: #fff;
    font-size: 17px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const CashoutContainer = styled.button`
  width: 155px;
  height: 114px;
  padding: 9px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 5px;
  background: #a328d6;
  border: none;

  p {
    color: #fff;
    font-size: 17px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
