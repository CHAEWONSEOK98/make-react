import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
  //string으로써의 property와 string array로 이루어짐.
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["a", "b"],
    doing: ["c", "d", "e"],
    done: ["f"],
  },
});
