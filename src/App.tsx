import { useEffect, useState } from "react";
import { Button } from "./components";
import { useFetch } from "./hooks";

const url = "https://jsonplaceholder.typicode.com/posts";

interface Data {
  name : string;
  lastName : string;
  age : number;

}

function App() {
  let [count, setCount] = useState(1); // Inicializamos con 1

  const ContarNumeros = () => {
    setCount((count) => count + 1);
  };

  let [name, setName] = useState("Franco");

  const changeName = () => {
    setName((name) => "Ignacio");
  };

  // Corregimos la llamada a useFetch
  const { data, error, loading } = useFetch<Data>(url);

  // Verificamos los estados de loading, error y data
  if (loading) {
    return <div>CARGANDO ...</div>;
  }
  if (error) {
    return <div>Ups hay un error: {error.message}</div>;
  }
  if (data) {
    return <div> {JSON.stringify(data)}</div>;
  }

  return (
    <>
      <h1>Hola Mundo</h1>
      <div className="card">
        <Button label={`Contador es ${count}`} parentMethod={ContarNumeros} />
      </div>
      <p>Tu nombre es: {name}</p>
      <div className="card">
        <Button label={`Cambiar Nombre`} parentMethod={changeName} />
      </div>
    </>
  );
}

export default App;
