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

  const onUpdate = (targetId) => {
    //todos State의 값들 중에
    //targetId와 일치하는 id를 갖는 todoItem의 isDone 변경

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    //인수 : todos 배역에서 targetid와 일치하는 id를 갖는 요소만 삭제한 새로운 배역
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
