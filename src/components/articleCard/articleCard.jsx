import React from "react";
import "./articleCard.css";

const ArticleCard = ({ author, created_at, title, body }) => {
  return (
    <div className="article-card">
      <h3>{title}</h3>
      <span>{author}</span>
      <span>{created_at}</span>
      <p>{body}</p>
    </div>
  );
};

export default ArticleCard;
