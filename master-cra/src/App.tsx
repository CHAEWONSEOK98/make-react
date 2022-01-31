import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  }
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          value={value}
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <button>login</button>
      </form>
    </div>
  );
};

export default App;
