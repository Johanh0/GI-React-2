import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <Button className="primary-btn" onClick={() => setCount(count - 1)}>
          -
        </Button>

        <Button className="primary-btn" onClick={() => setCount(count + 1)}>
          +
        </Button>
      </div>
    </>
  );
}

export default App;
