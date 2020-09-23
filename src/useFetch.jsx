import { useEffect, useState } from "react";

export const useFetch = (apiUrl) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData({ data });
      });
  }, [apiUrl]);
  return data;
};
