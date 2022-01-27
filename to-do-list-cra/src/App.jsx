import { useState } from "react";
import styles from "./App.module.css";

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

  function handleResetClick() {
    setItems([]);
  }

  function handleRemoveClick(e) {
    e.target.parentNode.remove();
  }
  return (
    <>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <h1>To-Do-List({items.length})</h1>
        <input
          value={value}
          type="text"
          onChange={handleInputChange}
          className={styles.input}
        />
        <button className={styles.btn}>Add</button>
        <button onClick={handleResetClick} className={styles.btn}>
          Reset
        </button>
      </form>
      <hr style={{ width: "400px" }} />
      <ul className={styles.ul}>
        {items.map((item, index) => (
          <div className={styles.listBox}>
            <li key={index}>{item}</li>
            <button onClick={handleRemoveClick}>x</button>
          </div>
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
