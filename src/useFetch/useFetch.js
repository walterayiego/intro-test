import { useEffect, useState } from "react";
import { api } from "../services/baseConfig";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(url);
        setData(res.data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
      }
    };

    const timeoutId = setTimeout(fetchData, 1000);
    return () => clearTimeout(timeoutId);
  }, [url]);

  const handleDelete = (id) => {
    const newPrequalifications = data.filter(
      (prequalification) => prequalification.id !== id
    );
    setData(newPrequalifications);
  };

  return { data, isPending, error, handleDelete };
};

export default useFetch;
