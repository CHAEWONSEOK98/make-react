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
`;

const P = styled.p`
  text-align: center;
`;

const Square = ({ colorValue }) => {
  return (
    <>
      <Section colorValue={colorValue}>
        <P>{colorValue ? colorValue : "Empty Value"}</P>
      </Section>
    </>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Square;
