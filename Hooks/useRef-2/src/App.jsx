import { useRef } from "react";

const App = () => {
  const inputElement = useRef();

  const handleClick = () => {
    console.log(inputElement.current);
    inputElement.current.style.width = "300px";
    inputElement.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <div>
        <button onClick={handleClick}>Click ME</button>
      </div>
    </div>
  );
};

export default App;
