import React from "react";
import styled from "styled-components";

export default function Transation(props) {
  const { text, spent, date } = props.transation;
  return (
    <div>
      <Date>{date}</Date>
      <div>
        <Text>{text}</Text>
      </div>
      <Money>{spent}</Money>
    </div>
  );
}
const Date = styled.p`
  color: #c6c6c6;
  font-size: 16px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Text = styled.p`
  color: #000;
  font-size: 16px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  word-break: break-all;
  max-width: 160px;
`;

const Money = styled.p`
  color: #c70000;
  text-align: right;
  font-size: 16px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 0px;
`;
