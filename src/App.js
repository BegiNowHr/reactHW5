import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCreateTodo = () => {
    if (inputValue.trim() === "") {
      return;
    }

    const updatedTodoList = [...todoList, inputValue];
    setTodoList(updatedTodoList);
    setInputValue("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите задачу"
        />
        <button onClick={handleCreateTodo}>Сохранить</button>
      </div>
      <div>
        {todoList.map((todo, index) => (
          <div key={index}>
            <h3>{todo}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
