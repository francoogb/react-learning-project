import { useEffect, useState } from "react";

// Definir tipos para datos y errores
type Data<T> = T | null;
type ErrorType = Error | null;

// Definir la interfaz Params
interface Params<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
}

// Definir el custom hook useFetch
export let useFetch = <T>(url: string): Params<T> => {
  // Estados para los datos, el loading y los errores
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    // Función para hacer la petición
    const controller = new AbortController();

    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch(url, controller);
        if (!response.ok) {
          throw new Error("Error en la petición");
        }
        const jsonData: T = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    // Ejecutar la función fetchData
    fetchData();

    return controller.abort();
  }, [url]);

  // Retornar los datos, el estado de carga y los errores
  return { data, loading, error };
};

export default useFetch;
