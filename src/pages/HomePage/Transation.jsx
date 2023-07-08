import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";

export default function Transation(props) {
  const { description, value, date, type } = props.transation;
  return (
    <Container>
      <div>
        <Date>{date}</Date>

        <Text>{description}</Text>
      </div>
      <div>
        <Money type={type}>{value}</Money>
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
  color: ${(props) => (props.type === "withDrawal" ? "#c70000" : "#03AC00")};
  text-align: right;
  font-size: 16px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
