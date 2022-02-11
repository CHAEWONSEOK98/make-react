import Form from "./components/Form";
import Square from "./components/Square";
import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [colorValue, setColorValue] = useState("");
  return (
    <Div>
      <Square colorValue={colorValue} />
      <Form colorValue={colorValue} setColorValue={setColorValue} />
    </Div>
  );
}

export default App;
