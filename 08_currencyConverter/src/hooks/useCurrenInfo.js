import { useState, useEffect } from "react";

export default function useCurrenInfo(currency) {
  const [data, setData] = useState({});

  async function fetchApi() {
    try {
      let api = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      );
      let response = await api.json();
      setData(response[currency]); // Access the correct key in the response
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  }

  useEffect(() => {
    fetchApi();
  }, [currency]);

  return data; // Ensure the fetched data is returned
}
