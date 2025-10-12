import "./App.css";
import Even from "./components/Even";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. Mount
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. Update
  useEffect(() => {
    // 진짜 component의 업데이트 단게에서만 코드를 실행 기키고 싶을 때
    // 래퍼런스 객체를 하나 생성해서 플래그로 사용하면 됨.
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  const onClickButton = (value) => {
    setCount(count + value);
    console.log(count);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
