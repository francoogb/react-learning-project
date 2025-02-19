import { useState } from "react";
import {Button} from "./components";

function App() {
  const [count, setCount] = useState(0);

  const countMore = () => {
    setCount((count) => count + 1)
  }

  return (
    <>
      <h1>Hola Mundo</h1>
      <div className="card">
        <Button label = {`Contador es ${count}`} parentMethod={countMore} />
       
      </div>
    </>
  );
}

export default App;
