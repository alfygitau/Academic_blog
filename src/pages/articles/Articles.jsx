import axios from "axios";
import React, { useEffect, useState } from "react";
import ArticleCard from "../../components/articleCard/articleCard";
import "./Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    axios.get("http://localhost:8000/articles").then((response) => {
      console.log(response.data);
      setArticles(response.data);
    });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="articles-list">
      {articles?.map((article) => (
        <ArticleCard
          title={article.title}
          body={article.body}
          key={article.id}
          author={article.author}
          created_at={article.created_at}
        />
      ))}
    </div>
  );
};

export default Articles;
