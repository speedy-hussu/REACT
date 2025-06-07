import React, { useEffect, useState } from "react";

import News from "./News";
function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("india");
  const [date, setDate] = useState("2025-01-16");
  async function fetchUrl() {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${category}&from=${date}&apiKey=965dad1791794ec3813b69dcb525f960`
    );
    let data = await response.json();
    setArticles(data.articles);
  }

  useEffect(() => {
    fetchUrl();
  }, [category, date]);
  console.log(articles);
  console.log(date);
  return (
    <>
      <div className="nav">
        <div className="logo">
          <h1>SPEEDY NEWZ </h1>
        </div>

        <div className="input">
          <div className="input-date">
            <input
              type="date"
              value={date}
              onChange={(e) => {
                if (e.target.value != "") {
                  setDate(e.target.value);
                } else {
                  setDate("2025-01-16");
                }
              }}
            />
          </div>
          <div className="input-text">
            <input
              type="text"
              placeholder="search news"
              onChange={(e) => {
                if (e.target.value != "") {
                  setCategory(e.target.value);
                } else {
                  setCategory("india");
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        {articles &&
          articles.map((article, index) => {
            return <News key={index} article={article} />;
          })}
      </div>
    </>
  );
}
export default App;
