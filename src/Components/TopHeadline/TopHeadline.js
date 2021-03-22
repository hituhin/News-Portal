import React, { useEffect, useState } from "react";

const TopHeadline = () => {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=1fa3f7b7adad4a5d8bae65a6531a3f5a";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setarticles(data.articles));
  }, []);
  return (
    <div>
      <h2>Top Headlines: {articles.length} </h2>
    </div>
  );
};

export default TopHeadline;
