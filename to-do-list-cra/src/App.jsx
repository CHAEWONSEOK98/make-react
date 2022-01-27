import { useState } from "react";

function Form() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  function handleInputChange(e) {
    setValue(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (value === "") {
      return;
    }
    setItems((currentArray) => [...currentArray, value]);
    setValue("");
  }
  console.log(items);
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1>To-Do-List({items.length})</h1>
        <input value={value} type="text" onChange={handleInputChange} />
        <button>Add</button>
      </form>
      <hr />
      <ul>
        {items.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <>
      <Form />
    </>
  );
}

export default App;
