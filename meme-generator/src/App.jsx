import Wind from "./components/Wind";
import { useState } from "react";

function App() {

  const [show, setShow] = useState(true);

  function toggleButton() {
    setShow(prevShow => !prevShow)
  }

  return (
    <main className="container">
      <button onClick={toggleButton}>Toggle WindowTracker</button>
      {show && <Wind />}
    </main>
  );
}

export default App;
