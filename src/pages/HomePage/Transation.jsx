import axios from "axios";
import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../contexts/userContexts";

export default function Transation(props) {
  const { description, value, date, type, id } = props.transation;
  const { getTransations, setBalance, balance } = props;
  const { user } = useContext(UserContext);
  function deleteTransation(id) {
    if (window.confirm("Você quer deletar essa transação?") === true) {
      axios
        .delete(`${import.meta.env.VITE_API_URL}/transation/${id}`, {
          headers: { authorization: `Bearer ${user.token}` },
        })
        .then((req) => {
          let count = Number(balance.replace(",", ".")) - Number(value);
          setBalance(count.toFixed(2));
          getTransations();
        })
        .catch((error) => {
          alert(error.response.data);
        });
    } else return;
  }

  return (
    <Container>
      <div>
        <Date>{date}</Date>

        <Text data-test="registry-name">{description}</Text>
      </div>
      <div>
        <Money data-test="registry-amount" type={type}>
          {value.replace(".", ",")}
        </Money>
        <ion-icon
          data-test="registry-delete"
          name="trash-outline"
          onClick={() => deleteTransation(id)}
        ></ion-icon>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 303px;
  height: 16px;
  margin-bottom: 10px;
  position: relative;

  display: flex;
  justify-content: space-between;

  div:first-child {
    display: flex;
    max-width: 160px;
    height: 100%;
  }
  div:last-child {
    display: flex;
    align-items: center;
    ion-icon {
      color: #c6c6c6;
      font-size: 16px;
      margin-left: 10px;
      text-align: center;
    }
  }
`;
const Date = styled.p`
  color: #c6c6c6;
  font-size: 16px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 10px;
`;

const Text = styled.p`
  color: #000;
  font-size: 16px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 160px;
`;

const Money = styled.p`
  color: ${(props) => (props.type === "saida" ? "#c70000" : "#03AC00")};
  text-align: right;
  font-size: 16px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
