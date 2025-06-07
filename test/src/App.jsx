import React, { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  async function fetchUrl() {
    let response = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_658965e1779b5e0e944f24d95c39f6b54ec57&category=politics&country=bd`
    );

    let data = await response.json();
    console.log(data);
    setArticles(data.articles); // Adjust key name if the response structure differs
  }

  useEffect(() => {
    fetchUrl();
  },[]);

  return;
}

export default App;
