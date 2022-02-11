import React from "react";
import styled from "styled-components";
import colorNames from "colornames";

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 0.25rem;
  width: 100%;
  font-size: 1rem;
  box-shadow: 2px 2px 5px #000;
  border-radius: 0.25rem;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  min-height: 48px;
  margin-top: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  box-shadow: 2px 2px 5px #000;
  padding: 0.25rem;
`;

const Form = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "400px" }}>
      <Input
        value={colorValue}
        required
        type="text"
        placeholder="Add color name"
        autoFocus
        onChange={(e) => {
          setColorValue((prev) => e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <Button
        type="button"
        onClick={() => setIsDarkText((prev) => !isDarkText)}
      >
        Toggle Text Color
      </Button>
    </form>
  );
};

export default Form;
