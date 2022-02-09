import { useState } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
`;

const Div = styled.div`
  display: flex;
`;

const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    if (toDo === "") return;
    e.preventDefault();
    setList((prev) => {
      return [...prev, toDo];
    });
    setToDo((prev) => "");
    console.log(list);
  };

  const handleChange = (e) => {
    const text = e.currentTarget.value;
    setToDo((prev) => {
      return text;
    });
    console.log(text);
  };

  const handleResetClick = () => {
    setList((prev) => []);
  };

  const handleRemoveClick = (e) => {
    e.currentTarget.parentNode.remove();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={toDo} type="text" onChange={handleChange} />
        <button type="reset" onClick={handleResetClick}>
          {/*type="reset" 설정 필요*/}
          reset
        </button>
      </form>
      <Ul>
        {list.map((li) => (
          <Div>
            <li key={Date.now().toString()}>{li}</li>
            <button onClick={handleRemoveClick}>x</button>
          </Div>

          //Date.now().toString() 이거를 list key값으로 쓸 수 있지 않을까?
        ))}
      </Ul>
    </>
  );
};

export default ToDoList;
