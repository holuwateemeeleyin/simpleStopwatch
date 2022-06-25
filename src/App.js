import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const timerId = useRef(0);
  const [count, setCount] = useState(0);

  const startTimer = () => {
    timerId.current = setInterval(() => setCount((c) => c + 1), 1000);
  };
  const stopTimer = () => {
    clearInterval(timerId.current);
  };
  const resetTimer = () => {
    setCount(0);
  };
  console.log("console test");

  return (
    <div className="App">
      <p>Timer: {count} </p>
      <button onClick={startTimer}> Start </button>
      <button onClick={resetTimer}> Reset </button>
      <button onClick={stopTimer}> Stop </button>
    </div>
  );
}
