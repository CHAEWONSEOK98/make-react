import { useRecoilState, useRecoilValue } from "recoil";
import { toDoSelector, categoryState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  //const [toDos, setToDos] = useRecoilState(toDoState); //atom의 값을 가져오고 수정하고.
  /*   const value = useRecoilValue(toDoState); //atom으로 부터 값을 가져옴.
  const modFn = useSetRecoilState(toDoState); //atom의 값을 수정 */

  //const toDos = useRecoilValue(toDoState);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
