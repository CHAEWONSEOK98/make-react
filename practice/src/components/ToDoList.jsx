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

  const handleRemoveClick = (index) => {
    //e.currentTarget.parentNode.remove();

    const listItems = [...list.slice(0, index), ...list.slice(index + 1)];
    console.log(listItems);
    setList((prev) => listItems);
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
        {list.map((li, index) => (
          <Div>
            <li key={index}>{li}</li>
            <button key={index} onClick={() => handleRemoveClick(index)}>
              x
            </button>
          </Div>

          //Date.now().toString() 이거를 list key값으로 쓸 수 있지 않을까?
        ))}
      </Ul>
    </>
  );
};

export default ToDoList;
