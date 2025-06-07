import React from "react";
import "./News.css";
function News(props) {
  return (
    <div className="card">
      <div className="img">
        {props.article.urlToImage == null ? (
          <img src="./img/img.jpg" alt="image" />
        ) : (
          <img src={props.article.urlToImage} alt="image" />
        )}
      </div>
      <div className="title">
        <h1>{props.article.title}</h1>
      </div>

      <div className="desc">
        <p>
          {props.article.description?.substring(0, 70)}...{" "}
          <a href={props.article.url} target="blank">
            Readmore
          </a>{" "}
        </p>
      </div>
      <div className="src">
        <p>source : {props.article.source.name}</p>
      </div>
    </div>
  );
}

export default News;
