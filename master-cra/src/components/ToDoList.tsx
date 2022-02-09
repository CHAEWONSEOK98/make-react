import { useRecoilValue } from "recoil";
import { toDoState, toDoSelector } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  //const [toDos, setToDos] = useRecoilState(toDoState); //atom의 값을 가져오고 수정하고.
  /*   const value = useRecoilValue(toDoState); //atom으로 부터 값을 가져옴.
  const modFn = useSetRecoilState(toDoState); //atom의 값을 수정 */

  //const toDos = useRecoilValue(toDoState);
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo
            /*{...toDo}*/
            key={toDo.id}
            text={toDo.text}
            category={toDo.category}
            id={toDo.id}
          />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo
            /*{...toDo}*/
            key={toDo.id}
            text={toDo.text}
            category={toDo.category}
            id={toDo.id}
          />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo
            /*{...toDo}*/
            key={toDo.id}
            text={toDo.text}
            category={toDo.category}
            id={toDo.id}
          />
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default ToDoList;
