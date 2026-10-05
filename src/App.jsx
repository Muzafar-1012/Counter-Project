import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="main"   >
      <div className="child">
        {counter}
      </div>
      <button onClick={function () {
        setCounter(counter + 1)
      }}>Increase</button>
      <button
        onClick={function () {
          setCounter(counter - 1)
        }}
      >Decrease</button>
      <button
        onClick={function () {
          setCounter(0)
        }}>Reset</button>

    </div>
  );
}

export default App;

