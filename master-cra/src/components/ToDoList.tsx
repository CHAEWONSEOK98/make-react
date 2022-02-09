import { useRecoilValue } from "recoil";
import { toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  //const [toDos, setToDos] = useRecoilState(toDoState); //atom의 값을 가져오고 수정하고.
  /*   const value = useRecoilValue(toDoState); //atom으로 부터 값을 가져옴.
  const modFn = useSetRecoilState(toDoState); //atom의 값을 수정 */

  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo
            key={toDo.id}
            /*{...toDo}*/ text={toDo.text}
            category={toDo.category}
            id={toDo.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
