import { useEffect, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");
  // const [count, setCount] = useState(0);

  //Using useRef will solve this problem of infinite re-renders so we use it
  //instead of using a useState hook for counting those re-renders
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });

  //This will cause infinite loop of re-renders
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // });

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>
        <span>Enter Your Name:</span> {name}
      </h2>
      <h2>Renders: {count.current}</h2>
    </>
  );
}

export default App;
