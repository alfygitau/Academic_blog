import React, { useEffect, useState } from "react";
import "./articleDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArticleDetails = () => {
  const param = useParams();
  console.log(param);
  const { id } = param;
  const [article, setArticle] = useState({});

  const fetchArticle = async (id) => {
    await axios
      .get(`http://localhost:8000/articles/${id}`)
      .then((response) => {
        console.log(response.data);
        setArticle(response.data);
      });
  };

  useEffect(() => {
    fetchArticle(id);
  }, [id]);

  console.log("article", article);

  return (
    <div className="article-details">
      <h5>{article.title}</h5>
      <h6>{article.author}</h6>
      <span>Created at: {article.created_at}</span>
      <p>{article.body}</p>
    </div>
  );
};

export default ArticleDetails;
