import React from "react";
import styled from "styled-components";

const Form = ({ colorValue, setColorValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const text = e.currentTarget.value;
    setColorValue((prev) => {
      return text;
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={colorValue}
        required
        type="text"
        placeholder="Add color name"
        autoFocus
        onChange={handleChange}
        //onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  );
};

export default Form;
