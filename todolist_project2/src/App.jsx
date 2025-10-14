import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef } from "react";

const mocData = [
  { id: 0, isaDone: false, content: "React", date: new Date().getTime() },
  { id: 1, isaDone: false, content: "Study", date: new Date().getTime() },
];

function App() {
  const [todos, setTodos] = useState(mocData);
  // 고유 ID 만들기
  const idRef = useRef(2);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  );
}

export default App;
