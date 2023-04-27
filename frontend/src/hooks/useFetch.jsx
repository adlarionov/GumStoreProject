import { useEffect, useState } from "react";

/**
 * useFetch - запрос на получение данных
 * @module hooks/useFetch
 * @method
 * @param {string} url - адрес сервера
 * @returns {any} data - данные с сервера
 * @returns {boolean} loading - загрузка во время запроса
 * @throws {Error} error - ошибка запроса
 * @example 
 * // returns data from server
 * const { data, loading, error } = useFetch("http://localhost:1337/api/gums")
 *    .then((res) => res.json())
 *    .then((json) => console.log(json.data));
 */

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, error, data, setData };
};

export default useFetch;
