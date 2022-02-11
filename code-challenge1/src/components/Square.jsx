import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid #000;
  box-shadow: 2px 2px 5px #000;
  border-radius: 0.25rem;
  display: grid;
  place-content: center;
  background-color: ${(props) => props.colorValue};
  color: ${(props) => (props.isDarkText ? "#000" : "#FFF")};
`;

const P = styled.p`
  text-align: center;
`;

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <>
      <Section colorValue={colorValue} isDarkText={isDarkText}>
        <P>{colorValue ? colorValue : "Empty Value"}</P>
        <P>{hexValue ? hexValue : null}</P>
      </Section>
    </>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Square;
